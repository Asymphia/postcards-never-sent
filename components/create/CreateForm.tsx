"use client"

import FormControlButton from "@/components/ui/FormControlButton"
import FirstStep from "@/components/create/FirstStep"
import { FormEvent, useState } from "react"
import SecondStep from "@/components/create/SecondStep"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import { createPostcard } from "@/app/actions"
import Checkbox from "@/components/contact/Checkbox"

const CreateForm = () => {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [from, setFrom] = useState<string>("")
    const [to, setTo] = useState<string>("")
    const [selectedStamp, setSelectedStamp] = useState<postcardStamp | null>(null)
    const [checked, setChecked] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleSecondStep = () => {
        setError(null)

        if(!from) {
            setError("You must write from who is the postcard!")
            return
        } else if (!to) {
            setError("You must write to who is the postcard!")
            return
        } else if(!text) {
            setError("You must provide the message!")
            return
        }

        setCurrentStep(prevStep => prevStep + 1)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setError(null)

        if(!selectedStamp) {
            setError("You must pick a stamp!")
            return
        } else if (!checked) {
            setError("You must accept terms & conditions!")
            return
        }

        if (currentStep === 1) {
            const result = await createPostcard({
                from,
                to,
                text,
                selectedStamp
            })

            if (result.success) {
                setCurrentStep(0)
                setText("")
                setFrom("")
                setTo("")
                setSelectedStamp(null)
                setChecked(false)
                setError(null)

                alert("Postcard sent!")
            } else {
                setError(result.error || "Something went wrong!")
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-fit space-y-8">
            { error && <p className="text-center text-accent">{ error }</p> }

            { currentStep === 0 && (
                <FirstStep
                    from={from}
                    onChangeFrom={(e) => setFrom(e.target.value)}
                    to={to}
                    onChangeTo={(e) => setTo(e.target.value)}
                    text={text}
                    onChangeText={(e) => setText(e.target.value)}
                />
            ) }

            { currentStep === 1 && (
                <SecondStep from={from} to={to} text={text} selectedStamp={selectedStamp} setSelectedStamp={setSelectedStamp} />
            ) }

            {
                currentStep === 1 && <Checkbox isChecked={checked} toggleChecked={() => setChecked(prevState => !prevState)} />
            }

            <div className="w-full flex justify-between">
                <div className={`w-fit ${currentStep !== 1 && "opacity-0 pointer-events-none" }`}>
                    <FormControlButton text="< Previous step" onClick={ () => setCurrentStep(0) } />
                </div>

                <div className={`w-fit ${currentStep !== 0 && "opacity-0 pointer-events-none self-end" }`}>
                    <FormControlButton text="Next step >" onClick={ handleSecondStep } />
                </div>

                <div className={`w-fit ${currentStep !== 1 && "hidden pointer-events-none" }`}>
                    <FormControlButton text="Submit" type="submit" />
                </div>
            </div>
        </form>
    )
}

export default CreateForm