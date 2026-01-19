"use client"

import stampFlower from "@/assets/stamp_flower.svg"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const StampsHeart = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const stamps = gsap.utils.toArray<HTMLElement>(".stamp-item")

        let ctx = gsap.context(() => {
            const assemblyTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            })

            assemblyTl.fromTo(stamps,
                {
                    opacity: 0,
                    x: () => (Math.random() - 0.5) * 500,
                    y: () => (Math.random() - 0.5) * 500,
                    rotation: () => Math.random() * 100,
                    scale: 0.5,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power1.out",
                    stagger: {
                        amount: 0.8,
                        from: "random"
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const heartAreas = [
        "Heart1","Heart2","Heart3","Heart4","Heart5","Heart6","Heart7","Heart8",
        "Heart9","Heart10","Heart11","Heart12","Heart13","Heart15","Heart16","Heart17"
    ]

    return (
        <div ref={containerRef} className="py-20 overflow-hidden w-full flex justify-center">
            <div className="grid w-fit gap-1"
                 style={{
                     gridTemplateColumns: "repeat(7, 1fr)",
                     gridTemplateRows: "repeat(7, 1fr)",
                     gridTemplateAreas: `
                      ". Heart1 Heart2 . Heart4 Heart5 ."
                      "Heart17 . . Heart3 . . Heart6"
                      "Heart16 . . . . . Heart7"
                      "Heart15 . . . . . Heart8"
                      ". Heart13 . . . Heart9 ."
                      ". . Heart12 . Heart10 . ."
                      ". . . Heart11 . . ."
                    `,
                 }}
            >
                {
                    heartAreas.map((area) => (
                        <div
                            key={area}
                            style={{ gridArea: area }}
                            className="stamp-item flex justify-center items-center"
                        >
                            <Image
                                src={stampFlower}
                                alt="A stamp with a flower"
                                className="w-16 h-16 pointer-events-none"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StampsHeart