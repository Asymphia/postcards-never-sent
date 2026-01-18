import MainHeader from "@/components/ui/MainHeader"
import WhyExists from "@/components/about/WhyExists"
import WhatMean from "@/components/about/WhatMean"
import WhatHappens from "@/components/about/WhatHappens"
import CreateYourOwn from "@/components/about/CreateYourOwn"

const AboutPage = () => {
    return (
        <div className="space-y-36">
            <MainHeader
                headerText="About our project"
                subheaderText="Send messages to your loved ones - anymously"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
            />

            <WhyExists />

            <WhatMean />

            <WhatHappens />

            <CreateYourOwn />
        </div>
    )
}

export default AboutPage