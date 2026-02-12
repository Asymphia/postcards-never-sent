"use client"

import Link from "next/link"

interface CheckboxProps {
    isChecked: boolean
    toggleChecked: () => void
}

const Checkbox = ({ isChecked, toggleChecked }: CheckboxProps) => {
    return (
        <label className="flex space-x-2 cursor-pointer items-center" >
            <div className={`xl:size-5 size-4 relative after:transition-all after:rounded-sm xl:after:size-5 after:size-4 after:absolute after:border-1 after:border-solid  ${isChecked ? "after:bg-accent after:border-bg" : "after:bg-bg after:border-accent"}`}>
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