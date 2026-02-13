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

    const [state, action] = useActionState(reportBug, initialState)
    const status = useFormStatus()

    const [checked, setChecked] = useState<boolean>(false)

    return (
        <form action={ action } className="xl:space-y-5 md:space-y-4 space-y-3 w-full max-w-[75rem] mx-auto">
            <div className="grid grid-cols-2 xl:gap-5 md:gap-4 gap-3">
                <Input name="whatHappened" placeholder="What happened?*" type="text" />
                <Select />
                <Input name="browser" placeholder="On which browser?*" type="text" />
                <Input name="page" placeholder="Which page contains a bug?*" type="text" />
            </div>

            <Textarea name="details" placeholder="Detailed info" />

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