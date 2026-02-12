"use client"

import { useRouter } from "next/navigation"
import { ReactNode } from "react"

const Modal = ({ children, href="", additionalStyles=true }: { children: ReactNode, href?: string, additionalStyles?: boolean }) => {
    const router = useRouter()

    const onDismiss = () => {
        if(!href) router.back()
        else router.push(href)
    }

    return (
        <div onClick={onDismiss} className="fixed inset-0 w-screen h-screen bg-header/80 z-20">
            <dialog
                onClick={(e) => e.stopPropagation()} open
                className={`w-fit h-fit fixed top-1/2 left-1/2 -translate-1/2 ${additionalStyles ? "bg-bg xl:p-6 md:p-5 p-4 rounded-sm flex flex-nowrap items-center gap-4" : "bg-transparent"}`}
            >
                { children }
            </dialog>
        </div>
    )
}

export default Modal