"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const PageTransition = ({ children } : { children: React.ReactNode }) => {
    const pathname = usePathname()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        gsap.from(ref.current, {
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
            immediateRender: false,
        })
    }, [pathname])

    return <div ref={ref}>{children}</div>
}

export default PageTransition