import MainHeader from "@/components/ui/MainHeader"
import PostcardWrapper from "@/components/ui/PostcardWrapper"

const AboutPage = () => {
    return (
        <div>
            <MainHeader
                headerText="About our project"
                subheaderText="Send messages to your loved ones - anymously"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
            />

            <PostcardWrapper />
        </div>
    )
}

export default AboutPage