import CompanionForm from "@/components/companionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Link from "next/link";
import Image from "next/image";

const newCompanion = async () => {

    const { userId } = await auth();
    if (!userId) redirect("/sign-in");

    const canCreateCompanion = await newCompanionPermissions();

    console.log(canCreateCompanion);

    return (
        <main className={"min-lg:w-1/3 min-md:w-2/3 items-center justify-center"}>
            { canCreateCompanion ? (
                <article className={"w-full gap-4 flex flex-col"}>
                    <h1>Companion Builder</h1>
                    <CompanionForm />
                </article>
            ) : (
                <article className="companion-limit">
                    <Image src={"/images/limit.svg"} alt={"Companion limit reached"} width={360} height={230} />
                    <div className="cta-badge">
                        Upgrade your plan to create more companions.
                    </div>
                    <h1>You've Reached Your Limit</h1>
                    <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
                    <Link href={'/subscription'} className={'btn-primary w-full justify-center'} >Upgrade My Plan</Link>
                </article>
            ) }


        </main>

    )
}
export default newCompanion
