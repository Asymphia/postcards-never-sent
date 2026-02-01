import MainHeader from "@/components/ui/MainHeader"
import SearchBar from "@/components/ui/SearchBar"
import PostcardsResults from "@/components/search/PostcardsResults"

const MainPage = () =>  {
    return (
        <div className="space-y-12">
            <MainHeader
                headerText="Postcards never sent"
                subheaderText="Messages that never found the courage to be sent"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
            />

            <SearchBar />

            <PostcardsResults />
        </div>
    )
}

export default MainPage
