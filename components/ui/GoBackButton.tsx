"use client"

import { useRouter } from "next/navigation"

const GoBackButton = () => {
    const router = useRouter()

    return (
        <button className="text-accent transition-all hover:text-accent-dark cursor-pointer" onClick={router.back} type="button">
            &lt; Go back
        </button>
    )
}

export default GoBackButton