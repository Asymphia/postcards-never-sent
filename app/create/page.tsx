import MainHeader from "@/components/ui/MainHeader"
import CreateForm from "@/components/create/CreateForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Create postcard | Postcards Never Sent",
    description: "Create and send an anonymous postcard. Add who it’s from, who it’s to, write your message, and pick a stamp. Words meant to be felt, not delivered."
}

const CreatePage = () => {
    return (
        <div className="space-y-28">
            <MainHeader
                headerText="Create your postcard"
                subheaderText="Write what was never sent"
                description="Create your anonymous postcard to someone, somewhere, or nowhere at all.
                    Add who it’s from, who it’s to, write your message, and choose a stamp that carries its mood.
                    No accounts. No judgment. Just words that needed a place to exist."
            />

            <CreateForm />
        </div>
    )
}

export default CreatePage