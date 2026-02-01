"use client"

import Input from "./Input"
import Textarea from "@/components/contact/Textarea"
import Button from "@/components/ui/Button"
import Checkbox from "@/components/contact/Checkbox"
import { useState } from "react"

const ContactForm = () => {
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <form className="space-y-5 w-full max-w-[75rem] mx-auto">
            <div className="grid grid-cols-2 gap-5">
                <Input name="name" placeholder="Name" type="text" />
                <Input name="surname" placeholder="Surname" type="text" />
            </div>

            <Input name="email" placeholder="E-mail address" type="text" />
            <Input name="reason" placeholder="Reason for contact" type="text" />
            <Input name="title" placeholder="Title of the message" type="text" />
            <Textarea name="message" placeholder="Message" />

            <Checkbox isChecked={checked} toggleChecked={() => setChecked(prev => !prev)} />

            <div className="w-fit ml-auto">
                <Button text="Submit" />
            </div>
        </form>
    )
}

export default ContactForm