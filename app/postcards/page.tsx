import MainHeader from "@/components/ui/MainHeader"
import SearchContent from "@/components/search/SearchContent"
import type { Metadata } from "next"
import { Suspense } from "react"
import Loader from "@/components/ui/Loader"

export const metadata: Metadata = {
    title: "Browse postcards | Postcards Never Sent",
    description: "Discover anonymous postcards from strangers—messages never sent but full of emotion, stories, and confessions waiting to be read."
}

const MainPage = () =>  {
    return (
        <div className="space-y-12">
            <MainHeader
                headerText="Browse postcards"
                subheaderText="Read what others never sent"
                description="Explore a collection of anonymous postcards written to past loves, distant friends,
                    future selves, and unanswered memories. Browse quietly through messages that were never delivered
                    — but still carry meaning, honesty, and emotion."
            />

            <Suspense fallback={<Loader />}>
                <SearchContent />
            </Suspense>
        </div>
    )
}

export default MainPage
