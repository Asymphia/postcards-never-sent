import MainHeader from "@/components/ui/MainHeader"
import SearchContent from "@/components/search/SearchContent"

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

            <SearchContent />
        </div>
    )
}

export default MainPage
