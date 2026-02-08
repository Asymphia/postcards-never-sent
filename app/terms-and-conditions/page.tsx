import MainHeader from "@/components/ui/MainHeader"
import { SECTIONS } from "@/lib/terms-and-conditions"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Anchor from "@/components/terms-and-conditions/Anchor"

const TermsAndConditionsPage = () => {
    return (
        <div className="xl:space-y-28 md:space-y-16 space-y-12">
            <MainHeader
                headerText="Terms & conditions"
                subheaderText="Last updated: 20 January 2026"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
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