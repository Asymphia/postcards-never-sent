const Button = ({ text }: { text: string }) => {
    return (
        <button className="bg-accent px-20 py-2 text-white rounded-sm cursor-pointer transition-all hover:bg-accent-dark">
            { text }
        </button>
    )
}

export default Button