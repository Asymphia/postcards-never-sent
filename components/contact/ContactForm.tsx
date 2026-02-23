"use client"

import Input from "./Input"
import Textarea from "@/components/contact/Textarea"
import Button from "@/components/ui/Button"
import Checkbox from "@/components/contact/Checkbox"
import {useActionState, useState} from "react"
import { useFormStatus } from "react-dom"
import { ActionResponse, reportBug } from "@/actions/bug-actions"
import Select from "@/components/contact/Select"

const ContactForm = () => {
    const initialState: ActionResponse = { success: false, submitted: false, error: null }

    const [text, setText] = useState<string>("")
    const maxCharacters = 1200

    const [state, action] = useActionState(reportBug, initialState)
    const status = useFormStatus()

    const [checked, setChecked] = useState<boolean>(false)

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

                <Input name="page" placeholder="Which page contains a bug?*" type="text" />
            </div>

            <div className="relative">
                <Textarea name="details" placeholder="Detailed info" onChangeText={e => setText(e.target.value)} />

                <p className={`absolute right-4 bottom-4 ${text.length >= maxCharacters ? "text-accent" : "text-text"}`}>
                    {text.length} / {maxCharacters}
                </p>
            </div>


            <Checkbox isChecked={checked} toggleChecked={() => setChecked(prev => !prev)} name="agreement" />

            <div className="w-fit ml-auto">
                <Button text={status.pending ? "Sending…" : "Submit"} disabled={status.pending} />
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