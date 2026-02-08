"use client"

import { useRouter } from "next/navigation"
import checkmark from "@/assets/checkmark.svg"
import Image from "next/image"

const Modal = () => {
    const router = useRouter()

    return (
        <div onClick={() => router.push("/")} className="fixed inset-0 w-screen h-screen bg-header/80 z-20">
            <dialog open className="bg-bg p-6 rounded-sm flex flex-nowrap items-center gap-4 fixed top-1/2 left-1/2 -translate-1/2">
                <Image src={checkmark} alt="checkmark image" width={30} />

                <p className="text-text">
                    Your postcard was successfully submitted
                </p>
            </dialog>
        </div>
    )
}

export default Modal