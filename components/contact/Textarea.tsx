interface TextareaProps {
    placeholder: string
    name: string
}

const Textarea = ({ placeholder, name }: TextareaProps) => {
    return (
        <textarea
            placeholder={placeholder}
            name={name}
            className="resize-none border-1 border-solid border-accent w-full px-5 py-2 rounded-sm transition-all focus:border-accent-dark focus:outline-0 text-text placeholder:text-text focus:text-accent-dark"
            rows={10}
        />
    )
}

export default Textarea