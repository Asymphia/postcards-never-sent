import { ChangeEvent } from "react"

interface TextareaProps {
    placeholder: string
    name: string
    onChangeText?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({ placeholder, name, onChangeText }: TextareaProps) => {
    return (
        <textarea
            maxLength={1200}
            placeholder={placeholder}
            name={name}
            onChange={onChangeText}
            className="textarea resize-none border-1 border-solid border-accent w-full md:px-5 px-3 py-2 rounded-sm transition-all focus:border-accent-dark focus:outline-0 text-text placeholder:text-text focus:text-accent-dark"
            rows={10}
        />
    )
}

export default Textarea