"use client"

import Link from "next/link"

interface CheckboxProps {
    isChecked: boolean
    toggleChecked: () => void
}

const Checkbox = ({ isChecked, toggleChecked }: CheckboxProps) => {
    return (
        <label className="flex space-x-2 cursor-pointer" >
            <div className={`w-5 h-5 relative after:transition-all after:rounded-sm after:w-5 after:h-5 after:absolute after:border-1 after:border-solid  ${isChecked ? "after:bg-accent after:border-bg" : "after:bg-bg after:border-accent"}`}>
                <input
                    onChange={toggleChecked}
                    checked={isChecked}
                    type="checkbox"
                    className="hidden"
                />
            </div>

            <span>
                I understand {' '}
                <Link href="/terms-and-conditions" className="underline transition-all hover:text-accent active:text-accent-dark">terms & conditions</Link>
                {' '} and accept them
            </span>
        </label>
    )
}

export default Checkbox