"use client"

import { useState } from "react"

const Share = ({ postcardId }: { postcardId: number }) => {
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = async () => {
        try {
            const url = `${window.location.origin}/postcards/${postcardId}`
            await navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 4000)
        } catch (err) {
            return
        }
    }

    return (
        <button className="cursor-pointer relative" type="button" onClick={handleCopy}>
            <svg className="xl:size-6 md:size-5 size-4 fill-accent transition-all hover:fill-accent-dark" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <path d="M550 300C632.845 300 700 232.842 700 150C700 67.1575 632.845 0 550 0C467.158 0 400 67.1575 400 150C400 161.186 401.224 172.084 403.546 182.571L243.43 282.644C217.799 262.212 185.326 250 150 250C67.1575 250 0 317.158 0 400C0 482.842 67.1575 550 150 550C185.326 550 217.799 537.79 243.43 517.355L403.546 617.43C401.224 627.915 400 638.815 400 650C400 732.845 467.158 800 550 800C632.845 800 700 732.845 700 650C700 567.155 632.845 500 550 500C514.675 500 482.2 512.21 456.569 532.645L296.454 432.572C298.776 422.085 300 411.186 300 400C300 388.814 298.776 377.915 296.454 367.428L456.569 267.356C482.2 287.788 514.675 300 550 300Z" />
            </svg>

            <span className={`absolute top-0 px-2 md:py-1 py-[2px] bg-accent text-white md:text-xs text-[10px] rounded-sm transition-all ${copied ? "md:-left-[70px] -left-[56px] opacity-100" : "-left-[30px] opacity-0"}`}>
                Copied!
            </span>
        </button>
    )
}

export default Share