const FormControlButton = ({ text, onClick = () => {}, type="button" }: { text: string, onClick?: () => void, type?: "button" | "submit" }) => {
    return (
        <button type={ type } onClick={onClick} className="text-accent cursor-pointer transition-all hover:text-accent-dark">
            {text}
        </button>
    )
}

export default FormControlButton