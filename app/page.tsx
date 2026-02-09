import MainHeader from "@/components/ui/MainHeader"
import PostcardsCarousel from "@/components/home/PostcardsCarousel"
import TwoButtons from "@/components/ui/TwoButtons"

const MainPage = () => {
    return (
        <div className="xl:space-y-28 md:space-y-16 space-y-12">
            <MainHeader
                headerText="Postcards never sent"
                subheaderText="Send messages to your loved ones - anymously"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
            />

            <TwoButtons leftText="Read postcards" rightText="Create one" leftHref="/postcards" rightHref="/create" />

            <PostcardsCarousel />
        </div>
    )
}

export default MainPage