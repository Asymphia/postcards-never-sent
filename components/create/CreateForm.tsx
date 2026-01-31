"use client"

import FormControlButton from "@/components/ui/FormControlButton"
import FirstStep from "@/components/create/FirstStep"
import { useState } from "react"
import SecondStep from "@/components/create/SecondStep"
import { postcardStamp } from "@/components/postcards/PostcardStamp"

const CreateForm = () => {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [from, setFrom] = useState<string>("")
    const [to, setTo] = useState<string>("")
    const [selectedStamp, setSelectedStamp] = useState<postcardStamp | null>(null)


    return (
        <form className="mx-auto w-fit space-y-12">
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


            <div className="w-full flex justify-between">
                <div className={`w-fit ${currentStep === 0 && "opacity-0 pointer-events-none" }`}>
                    <FormControlButton text="< Previous step" onClick={() => setCurrentStep(prevState => prevState - 1)} />
                </div>

                `
                <FormControlButton text={currentStep === 0 ? "Next step >" : "Submit a postcard"} onClick={() => setCurrentStep(prevState => prevState + 1)} />
            </div>
        </form>
    )
}

export default CreateForm