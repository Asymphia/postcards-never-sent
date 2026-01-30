"use client"

import PostcardWrapper from "@/components/postcards/PostcardWrapper"
import FormControlButton from "@/components/ui/FormControlButton"
import FirstStep from "@/components/create/FirstStep"
import { useState } from "react"
import SecondStep from "@/components/create/SecondStep"

const CreateForm = () => {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [from, setFrom] = useState<string>("")
    const [to, setTo] = useState<string>("")


    return (
        <form className="mx-auto w-fit space-y-12">
            <PostcardWrapper>
                <div className="h-full grid grid-cols-2 gap-x-4">
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
                        <SecondStep from={from} to={to} text={text} />
                    ) }
                </div>
            </PostcardWrapper>

            <div className="w-full flex justify-between">
                <div className={`w-fit ${currentStep === 0 && "opacity-0 pointer-events-none" }`}>
                    <FormControlButton text="< Previous step" onClick={() => setCurrentStep(prevState => prevState - 1)} />
                </div>

                <FormControlButton text="Next step >" onClick={() => setCurrentStep(prevState => prevState + 1)} />
            </div>
        </form>
    )
}

export default CreateForm