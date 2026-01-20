import MainHeader from "@/components/ui/MainHeader"
import Link from "next/link";

const TermsAndConditionsPage = () => {
    return (
        <div className="space-y-28">
            <MainHeader
                headerText="Terms & conditions"
                subheaderText="Last updated: 20 January 2026"
                description="Postcards Never Sent is a place for words you never had a chance to send.
                            Write what you wish you had said, and who it was meant for.
                            Your message goes nowhere, and belongs to no one. It stays here, shared anonymously,
                            carried only by feeling."
            />

            <div className="max-w-[75rem] mx-auto space-y-16">
                <section className="space-y-6">
                    <h2> 1. About postcards never sent </h2>
                    <p>
                        Postcards Never Sent (“the Website”, “we”, “us”) is an anonymous platform where users can
                        share messages they never had the chance to send. These messages are publicly displayed and intended
                        to exist without ownership, response, or destination.
                        <br /> <br />
                        By using this Website, you agree to these Terms and Conditions.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 2. Eligibility </h2>
                    <p>
                        You may use this Website if you are at least 13 years old (or the minimum legal age required in
                        your country). By submitting a postcard, you confirm that you meet this requirement.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 3. Anonymous Use </h2>
                    <p>
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>You may submit postcards without creating an account or authenticating your identity.</li>
                            <li>Messages are shared anonymously.</li>
                            <li>We do not verify the identity of authors or recipients.</li>
                        </ul>
                        Once submitted, a postcard cannot be edited or deleted by the user.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 4. Content You Submit </h2>
                    <p>
                        When submitting a postcard, you may provide:
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>A sender name (“From”)</li>
                            <li>A recipient name (“To”)</li>
                            <li>The message text</li>
                        </ul>
                        You are solely responsible for the content you submit.
                        <br /> <br />
                        By submitting content, you confirm that:
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>You have the right to share the text</li>
                            <li>The content does not violate any laws</li>
                            <li>The content does not infringe on the rights of others</li>
                        </ul>
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 5. Prohibited Content </h2>
                    <p>
                        You agree not to submit content that includes:
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>Hate speech, harassment, or threats</li>
                            <li>Explicit sexual content</li>
                            <li>Content promoting violence, self-harm, or illegal activity</li>
                            <li>Personal data of real individuals (such as addresses, phone numbers, emails)</li>
                            <li>Content that is abusive, defamatory, or otherwise inappropriate</li>
                        </ul>
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 6. Content Moderation & Removal </h2>
                    <p>
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>Postcards cannot be edited or deleted by their authors.</li>
                            <li>
                                The Website owner reserves the right to remove any postcard that is deemed offensive,
                                inappropriate, or in violation of these Terms.
                            </li>
                            <li>
                                If you believe a postcard contains inappropriate content, offensive language, or personal
                                information about you that was submitted by someone else, you may request its removal by
                                contacting us through the form on the {' '}
                                <Link href="/contact" className="underline transition-all hover:text-accent active:text-accent-dark">
                                    Contact page
                                </Link>.
                                Please include the From, To, and message
                                text of the postcard so it can be identified. We will review such requests and remove the
                                postcard if it violates these Terms or compromises personal safety or privacy.
                            </li>
                            <li>Removal may occur without prior notice and without notifying the author of the postcard.</li>
                            <li>This moderation exists solely to protect the community and the purpose of the project.</li>
                        </ul>
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 7. Data & Privacy </h2>
                    <p>
                        We respect anonymity and minimal data usage.
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>We do not store personal user data.</li>
                            <li>We do not collect accounts, emails, IP addresses, or tracking identifiers for postcard submissions.</li>
                            <li>The only data stored is the content you voluntarily submit to a postcard: From, To, and Message text</li>
                        </ul>
                        For communication purposes, users may contact us via email, but emails are not linked to postcards.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 8. Ownership & License </h2>
                    <p>
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>You retain ownership of the text you submit.</li>
                            <li>By submitting a postcard, you grant us a non-exclusive, royalty-free license to display, store, and share the content as part of the Website.</li>
                        </ul>
                        Postcards are intended to remain on the Website indefinitely unless removed under moderation rules.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 9. Emotional Content Disclaimer </h2>
                    <p>
                        Postcards Never Sent may contain emotionally intense or sensitive content.
                        We do not provide mental health or crisis support. If you are in distress,
                        please seek help from a qualified professional or local support services.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 10. Limitation of Liability </h2>
                    <p>
                        We are not responsible for:
                        <ul className="list-disc pl-16 space-y-1 mb-1 mt-1">
                            <li>How users interpret content on the Website</li>
                            <li>Emotional responses triggered by reading or submitting postcards</li>
                            <li>Any loss, damage, or harm resulting from use of the Website</li>
                        </ul>
                        Use of the Website is entirely at your own risk.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 10. Limitation of Liability </h2>
                    <p>
                        We may update these Terms from time to time. Continued use of the Website after changes means
                        you accept the updated Terms.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2> 12. Contact </h2>
                    <p>
                        If you have questions, concerns, or need to report content, you may contact us via contact form
                        provided on the {' '}
                        <Link href="/contact" className="underline transition-all hover:text-accent active:text-accent-dark">
                            Contact page
                        </Link>.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default TermsAndConditionsPage