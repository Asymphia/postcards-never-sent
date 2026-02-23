interface SelectProps {
    name: string
    defaultValue: string
    options: { value: string, text: string }[]
}

const Select = ({ name, defaultValue, options }: SelectProps) => {
    return (
        <select name={ name } defaultValue="" className="border-1 border-solid border-accent w-full md:px-5 px-3 py-2 rounded-sm transition-all focus:border-accent-dark focus:outline-0 text-text placeholder:text-text focus:text-accent-dark">
            <option value="" disabled hidden>{ defaultValue }</option>

            {
                options.map(option => (
                    <option
                        className="bg-bg"
                        key={option.value}
                        value={option.value}
                    >
                        { option.text }
                    </option>
                ))
            }
        </select>
    )
}

export default Select