import MainHeader from "@/components/ui/MainHeader"
import { SECTIONS } from "@/lib/terms-and-conditions"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Anchor from "@/components/terms-and-conditions/Anchor"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & conditions | Postcards Never Sent",
    description: "Read the rules for using Postcards Never Sent. Learn how to share, browse, and interact safely while respecting privacy and community guidelines."
}

const TermsAndConditionsPage = () => {
    return (
        <div className="xl:space-y-28 md:space-y-16 space-y-12">
            <MainHeader
                headerText="Terms & conditions"
                subheaderText="Last updated: 20 January 2026"
                description="These Terms & Conditions outline the rules for using Postcards Never Sent.
                    By accessing or submitting a postcard, you agree to respect our guidelines,
                    protect others’ privacy, and use this space responsibly and lawfully."
            />

            <article className="max-w-[75rem] mx-auto xl:space-y-16 md:space-y-12 space-y-8">
                {
                    SECTIONS.map(section => (
                        <section key={section.id} className="space-y-4">
                            <h2>
                                {section.id}. {section.title}
                            </h2>


                            <div>
                                <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: Anchor }}>
                                    {section.content}
                                </ReactMarkdown>
                            </div>
                        </section>
                    ))
                }
            </article>
        </div>
    )
}

export default TermsAndConditionsPage