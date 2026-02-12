import MainHeader from "@/components/ui/MainHeader"
import WhyExists from "@/components/about/WhyExists"
import WhatMean from "@/components/about/WhatMean"
import WhatHappens from "@/components/about/WhatHappens"
import CreateYourOwn from "@/components/about/CreateYourOwn"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About us | Postcards Never Sent",
    description: "Learn about Postcards Never Sent, a space for anonymous messages, unspoken words, and stories that were never delivered but still deeply felt."
}

const AboutPage = () => {
    return (
        <div className="xl:space-y-28 md:space-y-16 space-y-12">
            <MainHeader
                headerText="About our project"
                subheaderText="Messages meant to be felt, not sent"
                description="Postcards Never Sent is a quiet space for words that never found their destination.
                    Share anonymous messages you couldn’t say out loud, read stories from strangers, and explore
                    emotions addressed to nowhere, or maybe to everyone."
            />

            <WhyExists />

            <WhatMean />

            <WhatHappens />

            <CreateYourOwn />
        </div>
    )
}

export default AboutPage