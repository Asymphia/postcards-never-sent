"use client"

import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import {createPortal} from "react-dom";

const Modal = ({ children, href="", additionalStyles=true, isOpen=true, onClick }: { children: ReactNode, href?: string, additionalStyles?: boolean, isOpen?: boolean, onClick?: () => void }) => {
    const router = useRouter()

    const onDismiss = () => {
        if(!href) router.back()
        else if (href === "none") onClick && onClick()
        else router.push(href)
    }

    return createPortal(
        <div onClick={onDismiss} className={`fixed inset-0 w-screen h-screen bg-header/80 z-20 ${!isOpen && 'hidden'}`}>
            <dialog
                onClick={(e) => e.stopPropagation()} open={isOpen}
                className={`max-w-fit fixed top-1/2 left-1/2 -translate-1/2 ${additionalStyles ? "bg-bg xl:p-6 md:p-5 p-4 rounded-sm flex flex-nowrap items-center gap-4" : "bg-transparent"}`}
            >
                { children }
            </dialog>
        </div>,
        document.body
    )
}

export default Modal