import Image from "next/image"
import searchIcon from "@/assets/search.svg"
import { ChangeEvent } from "react"

const SearchBar = ({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <label className="border-b-text border-b-1 flex space-x-5 py-2 md:w-fit w-full mx-auto group transition-all hover:border-accent focus-within:border-accent-dark">
            <Image src={searchIcon} alt="Search for a postcard" />
            <input value={ value } onChange={ onChange } name="search" type="text" placeholder="Search..." className="text-header placeholder:text-text md:w-96 w-full transition-all focus:outline-none" />
        </label>
    )
}

export default SearchBar