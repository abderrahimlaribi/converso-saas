import {SignIn} from '@clerk/nextjs'
import {Main} from "next/document";

const Page = () => {
    return (
        <main className="flex items-center justify-center">
            <SignIn/>
        </main>

    )
}
export default Page
