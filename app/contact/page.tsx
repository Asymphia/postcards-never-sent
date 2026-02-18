import MainHeader from "@/components/ui/MainHeader"
import ContactForm from "@/components/contact/ContactForm"
import type { Metadata } from "next"
import Button from "@/components/ui/Button"

export const metadata: Metadata = {
    title: "Contact us | Postcards Never Sent",
    description: "Get in touch with the Postcards Never Sent team. Share questions, feedback, or ideas. The only messages here that actually arrive."
}

const ContactPage = () => {
    return (
        <div className="xl:space-y-28 md:space-y-16 space-y-12">
            <MainHeader
                headerText="Get in touch"
                subheaderText="Reach us beyond the postcards"
                description="Have a question, suggestion, or something you’d like to share with us directly?
                    This is the only message that actually arrives. Reach out about feedback, ideas, partnerships,
                    or anything that could help shape Postcards Never Sent. We’re listening."
            />

            <section className="xl:space-y-10 md:space-y-8 space-y-6 w-full max-w-[75rem] mx-auto">
                <h2 className="text-center">
                    Report a bug
                </h2>

                <ContactForm />

                <p>
                    You can also report bugs on {" "}
                    <a href="https://github.com/Asymphia/postcards-never-sent" target="_blank" rel="noopener noreferrer" className="underline transition-all hover:text-accent">
                        GitHub
                    </a>
                </p>
            </section>

            <section className="xl:space-y-10 md:space-y-8 space-y-6 w-full max-w-[75rem] mx-auto text-center">
                <h2>
                    Help us improve postcards never sent
                </h2>

                <p className="xl:w-1/2 md:w-3/4 w-full mx-auto">
                    We created an anonymous survey to collect feedback from our users. Your answers are completely anonymous, and will guide us in making Postcards Never Sent more enjoyable and user-friendly.
                </p>

                <a href="https://tally.so/r/xXabzr" target="_blank" rel="noopener noreferrer">
                    <Button text="Take a survey" />
                </a>
            </section>
        </div>
    )
}

export default ContactPage