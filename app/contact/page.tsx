import MainHeader from "@/components/ui/MainHeader"
import ContactForm from "@/components/contact/ContactForm"

const ContactPage = () => {
    return (
        <div className="xl:space-y-28 md:space-y-16 space-y-12">
            <MainHeader
                headerText="Contact us"
                subheaderText="Reach us beyond the postcards"
                description="Have a question, suggestion, or something you’d like to share with us directly?
                    This is the only message that actually arrives. Reach out about feedback, ideas, partnerships,
                    or anything that could help shape Postcards Never Sent. We’re listening."
            />

            <ContactForm />
        </div>
    )
}

export default ContactPage