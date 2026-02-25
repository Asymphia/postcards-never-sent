"use client"

import Modal from "@/components/ui/Modal"
import Textarea from "@/components/contact/Textarea"
import Button from "@/components/ui/Button"
import { useActionState, useState } from "react"
import { ActionResponse, reportPostcard } from "@/actions/report-actions"
import Select from "@/components/contact/Select"

const ReportPostcard = ({ postcardId }: { postcardId: number }) => {
    const initialState: ActionResponse = { success: false, submitted: false, error: null }

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [text, setText] = useState<string>("")
    const maxCharacters = 1200

    const [state, action] = useActionState(reportPostcard.bind(null, postcardId), initialState)

    return (
        <>
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <svg className="xl:size-6 md:size-5 size-4 fill-accent transition-all hover:fill-accent-dark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108.844 9.91574C105.384 3.36142 94.6246 3.36142 91.1648 9.91574L1.16929 180.288C0.359169 181.815 -0.0424552 183.526 0.00355172 185.255C0.0495586 186.984 0.541628 188.671 1.43181 190.153C2.322 191.635 3.57994 192.86 5.08307 193.709C6.5862 194.559 8.28325 195.003 10.0089 195H190C191.724 195.004 193.42 194.559 194.922 193.71C196.424 192.861 197.681 191.637 198.571 190.156C199.46 188.675 199.951 186.989 199.997 185.261C200.042 183.533 199.64 181.823 198.829 180.298L108.844 9.91574ZM110.004 159.934C110.004 162.696 107.765 164.934 105.004 164.934H95.0048C92.2434 164.934 90.0048 162.696 90.0048 159.934V149.891C90.0048 147.129 92.2434 144.891 95.0048 144.891H105.004C107.765 144.891 110.004 147.129 110.004 149.891V159.934ZM95.0048 124.847C92.2434 124.847 90.0048 122.608 90.0048 119.847V79.7373C90.0048 76.9759 92.2434 74.7373 95.0048 74.7373H105.005C107.766 74.7373 110.004 76.9753 110.005 79.7363L110.013 119.846C110.013 122.608 107.775 124.847 105.013 124.847H95.0048Z" fill="#C26A5A"/>
                </svg>
            </button>

            {
                isOpen && (
                    <Modal additionalStyles={false} href="none" onClick={() => setIsOpen(false)}>
                        <div className="bg-bg xl:p-6 md:p-5 p-4 rounded-sm xl:space-y-10 md:space-y-8 space-y-6 lg:w-fit md:[w-60vw] w-[80vw]">
                            <h2 className="text-center">
                                Report a postcard
                            </h2>

                            <form className="space-y-4 text-right" action={ action }>
                                <Select name="reason" defaultValue="Reason of a report*" options={[
                                    { value: "INAPPROPRIATE_LANGUAGE", text: "Inappropriate language" },
                                    { value: "HATE_SPEECH", text: "Hate speech" },
                                    { value: "SPAM", text: "Spam" },
                                    { value: "HARASSMENT", text: "Harassment" },
                                    { value: "COPYRIGHT_VIOLATION", text: "Copyright violation" },
                                    { value: "OTHER", text: "Other" }
                                ]} />

                                <div className="relative">
                                    <Textarea name="details" placeholder="Details" onChangeText={e => setText(e.target.value)} />

                                    <p className={`absolute right-4 bottom-4 ${text.length >= maxCharacters ? "text-accent" : "text-text"}`}>
                                        {text.length} / {maxCharacters}
                                    </p>
                                </div>

                                <Button text={"Submit"} />
                            </form>

                            {
                                state.submitted && (
                                    <div className="text-accent">
                                        {
                                            state.success && (
                                                <p>Thanks - the report was received!</p>
                                            )
                                        }

                                        {
                                            !state.success && (
                                                <p>Error: {state.error ?? "Submission failed."}</p>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </Modal>
                )
            }
        </>

    )
}

export default ReportPostcard