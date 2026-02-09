import MainHeader from "@/components/ui/MainHeader"
import SearchContent from "@/components/search/SearchContent"

const MainPage = () =>  {
    return (
        <div className="space-y-12">
            <MainHeader
                headerText="Search for postcards"
                subheaderText="Messages that never found the courage to be sent"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
            />

            <SearchContent />
        </div>
    )
}

export default MainPage
