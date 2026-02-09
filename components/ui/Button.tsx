const Button = ({ text, type="primary" }: { text: string, type?: "primary" | "secondary" }) => {
    const buttonStyle = {
        primary: "bg-accent text-white border-1 border-solid border-accent hover:bg-accent-dark hover:border-accent-dark",
        secondary: "bg-bg text-accent border-1 border-solid border-accent hover:text-accent-dark hover:border-accent-dark",
    }

    return (
        <button className={`px-20 py-2 rounded-sm cursor-pointer transition-all ${buttonStyle[type]}`}>
            { text }
        </button>
    )
}

export default Button