import { ChangeEvent, useEffect, useRef, useState } from "react"
import PostcardWrapper from "@/components/postcards/PostcardWrapper";

interface FirstStepProps {
    from: string
    onChangeFrom: (e: ChangeEvent<HTMLInputElement>) => void
    to: string
    onChangeTo: (e: ChangeEvent<HTMLInputElement>) => void
    text: string
    onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const FirstStep = ({ from, onChangeFrom, to, onChangeTo, text, onChangeText }: FirstStepProps) => {
    const maxCharacters = 400
    const [isOverflowing, setIsOverflowing] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const textarea = textareaRef.current
        if (textarea) {
            setIsOverflowing(textarea.scrollHeight > textarea.clientHeight)
        }
    }, [text])

    return (
        <>
            <PostcardWrapper>
                <div className="h-full grid grid-cols-2 gap-x-4">
                    <div className="h-full w-full relative">
                        <textarea
                            ref={textareaRef}
                            value={text}
                            onChange={onChangeText}
                            maxLength={maxCharacters}
                            placeholder="Enter your message here..."
                            className={`resize-none focus:outline-none h-full w-full ${isOverflowing ? "text-accent" : "text-text"}`}
                        />

                        <p className={`absolute right-0 bottom-0 ${isOverflowing ? "text-accent" : "text-text"}`}>
                            {text.length} / {maxCharacters}
                        </p>
                    </div>


                    <div className="font-dm text-header xl:text-xl md:text-lg text-base space-y-3 self-end">
                        <p className="border-b-2 border-b-solid border-b-accent pb-1 flex flex-nowrap gap-2">
                            FROM:
                            <input
                                type="text"
                                placeholder="Enter a name..."
                                className="focus:outline-none flex-1 min-w-0"
                                value={from}
                                onChange={onChangeFrom}
                            />
                        </p>
                        <p className="border-b-2 border-b-solid border-b-accent pb-1 flex flex-nowrap gap-2">
                            TO:
                            <input
                                type="text"
                                placeholder="Enter a name..."
                                className="focus:outline-none flex-1 min-w-0"
                                value={to}
                                onChange={onChangeTo}
                            />
                        </p>
                    </div>
                </div>
            </PostcardWrapper>

            <p className="text-center">
                Write a message, including who it is from and who it is addressed to.
            </p>
        </>
    )
}

export default FirstStep