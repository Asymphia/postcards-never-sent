interface InputProps {
    type: string
    placeholder: string
    name: string
}

const Input = ({ type, placeholder, name }: InputProps) => {
    return (
        <input
            className="border-1 border-solid border-accent w-full md:px-5 px-3 py-2 rounded-sm transition-all focus:border-accent-dark focus:outline-0 text-text placeholder:text-text focus:text-accent-dark"
            placeholder={placeholder}
            type={type}
            name={name}
        />
    )
}

export default Input