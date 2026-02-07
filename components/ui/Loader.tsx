"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Loader = () => {
    const spinnerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (spinnerRef.current) {
            gsap.to(spinnerRef.current, {
                rotation: 360,
                repeat: -1,
                duration: 1,
                ease: "linear",
            })
        }
    }, [])

    return (
        <div className="flex items-center justify-center">
            <div
                ref={ spinnerRef }
                className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full"
            ></div>
        </div>
    )
}

export default Loader
