const Select = () => {
    return (
        <select name="device" defaultValue="" className="border-1 border-solid border-accent w-full md:px-5 px-3 py-2 rounded-sm transition-all focus:border-accent-dark focus:outline-0 text-text placeholder:text-text focus:text-accent-dark">
            <option value="" disabled hidden>On what device?</option>
            <option value="PHONE">Phone</option>
            <option value="TABLET">Tablet</option>
            <option value="PC">PC</option>
            <option value="OTHER">Other</option>
        </select>
    )
}

export default Select