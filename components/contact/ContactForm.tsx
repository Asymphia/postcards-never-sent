"use client"

import Input from "./Input"
import Textarea from "@/components/contact/Textarea"
import Button from "@/components/ui/Button"
import Checkbox from "@/components/contact/Checkbox"
import {useActionState, useEffect, useState} from "react"
import { ActionResponse, reportBug } from "@/actions/bug-actions"
import Select from "@/components/contact/Select"

const ContactForm = () => {
    const initialState: ActionResponse = { success: false, submitted: false, error: null }

    const [text, setText] = useState<string>("")
    const maxCharacters = 1200

    const [state, action] = useActionState(reportBug, initialState)

    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (state.submitted && state.success) {
            setChecked(false)
            setText("")
        }
    }, [state.submitted, state.success])

    return (
        <form action={ action } className="xl:space-y-5 md:space-y-4 space-y-3">
            <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-5 md:gap-4 gap-3">
                <Input name="whatHappened" placeholder="What happened? (shortly)*" type="text" />

                <Select name="device" defaultValue="On what device?" options={[
                    { value: "PHONE", text: "Phone" },
                    { value: "TABLET", text: "Tablet" },
                    { value: "PC", text: "PC" },
                    { value: "OTHER", text: "Other" }
                ]} />

                <Input name="browser" placeholder="On which browser?*" type="text" />

                <Select name="page" defaultValue="Which page contains a bug?*" options={[
                    { value: "HOME", text: "Home page" },
                    { value: "BROWSE_POSTCARDS", text: "Browse postcards" },
                    { value: "SINGLE_POSTCARD", text: "Single postcard" },
                    { value: "CREATE_POSTCARD", text: "Create postcard" },
                    { value: "ABOUT_US", text: "About us" },
                    { value: "CONTACT_US", text: "Contact us" },
                    { value: "TERMS_AND_CONDITIONS", text: "Terms & conditions" }
                ]} />
            </div>

            <div className="relative">
                <Textarea name="details" placeholder="Detailed info" onChangeText={e => setText(e.target.value)} />

                <p className={`absolute right-4 bottom-4 ${text.length >= maxCharacters ? "text-accent" : "text-text"}`}>
                    {text.length} / {maxCharacters}
                </p>
            </div>


            <Checkbox isChecked={checked} toggleChecked={() => setChecked(prev => !prev)} name="agreement" />

            <div className="w-fit ml-auto">
                <Button text="Submit" />
            </div>

            <div className="text-accent">
                {
                    state.submitted && state.success && (
                        <p>Thanks - bug report received!</p>
                    )
                }

                {
                    state.submitted && !state.success && (
                        <p>Error: {state.error ?? "Submission failed."}</p>
                    )
                }
            </div>
        </form>
    )
}

export default ContactForm