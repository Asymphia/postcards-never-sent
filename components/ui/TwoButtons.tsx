"use client"

import Button from "@/components/ui/Button"
import { useRouter } from "next/navigation"

interface TwoButtonProps {
    leftText: string
    rightText: string
    leftHref?: string
    rightHref?: string
}

const TwoButtons = ({ leftText, rightText, rightHref, leftHref }: TwoButtonProps) => {
    const router = useRouter()

    const handleLeftClick = () => {
        if(leftHref) router.push(leftHref)
        else router.back()
    }

    const handleRightClick = () => {
        if(rightHref) router.push(rightHref)
        else router.back()
    }

    return (
        <div className="flex flex-nowrap gap-4 justify-center">
            <Button text={ leftText } onClick={handleLeftClick} />

            <Button text={ rightText } type="secondary" onClick={handleRightClick} />
        </div>
    )
}

export default TwoButtons