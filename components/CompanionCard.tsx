"use client";
import bookMark from "@/public/icons/bookmark.svg"
import Clock from "@/public/icons/clock.svg"
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
    bookmarked: boolean;
}



const CompanionCard = ({
                           id,
                           name,
                           topic,
                           subject,
                           duration,
                           color,
                           bookmarked: initialBookmarked,
                       }: CompanionCardProps) => {
    const pathname = usePathname();
    const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
    const [isLoading, setIsLoading] = useState(false);

    const handleBookmark = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            if (isBookmarked) {
                await removeBookmark(id, pathname);
                setIsBookmarked(false);
            } else {
                await addBookmark(id, pathname);
                setIsBookmarked(true);
            }
        } catch (error) {
            console.error("Error toggling bookmark:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="companion-bookmark" onClick={handleBookmark} disabled={isLoading}>
                    <Image
                        src={
                            isBookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
                        }
                        alt="bookmark"
                        width={12.5}
                        height={15}
                    />
                </button>
            </div>

            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">{topic}</p>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/clock.svg"
                    alt="duration"
                    width={13.5}
                    height={13.5}
                />
                <p className="text-sm">{duration} minutes</p>
            </div>


            <Link href={`/companion/${id}`} className="w-full">
                <button className="btn-primary w-full justify-center">
                    Launch Lesson
                </button>
            </Link>
        </article>
    );
};
export default CompanionCard;
