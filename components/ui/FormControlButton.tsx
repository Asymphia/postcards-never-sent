const FormControlButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <button type="button" onClick={onClick} className="text-accent cursor-pointer transition-all hover:text-accent-dark">
            {text}
        </button>
    )
}

export default FormControlButton