"use client"

import Postcard from "@/components/postcards/Postcard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

gsap.registerPlugin(ScrollTrigger)

const WhyExists = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const leftPostcardRef = useRef<HTMLDivElement>(null)
    const rightPostcardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!leftPostcardRef.current || !rightPostcardRef.current) return

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 95%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0.3
            })

            tl.fromTo(leftPostcardRef.current,
                { opacity: 0, x: -200 },
                { opacity: 1, x: 0, ease: "power1.out", duration: 0.6 }
            ).fromTo(rightPostcardRef.current,
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, ease: "power1.out", duration: 0.6 }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="grid grid-cols-[36rem_1fr_36rem] gap-10 items-center w-full overflow-hidden">
            <div ref={leftPostcardRef}>
                <Postcard
                    stamp="flower"
                    from="abc"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ligula iaculis, mollis tellus semper, aliquet felis. Suspendisse et ligula at nunc tincidunt egestas vitae ut eros. Aliquam quis sem ac ligula bibendum pellentesque eu sit amet enim. Mauris rhoncus turpis ac venenatis suscipit. In accumsan est at felis ornaresit amet finibus turpis ultrices. Nunc varius finibus laoreet."
                    to="xyz"
                />
            </div>

            <div className="text-center space-y-10">
                <h2>
                    Why this place even exists
                </h2>

                <p>
                    This project exists because not everything we feel needs to be spoken or answered. Some words are carried for too long — too heavy, too unfinished, or arriving only after it is already too late. Not every message finds its way to the person it was meant for. Still, writing those words down can matter, even if they are never sent anywhere.
                </p>
            </div>

            <div ref={rightPostcardRef}>
                <Postcard
                    stamp="flower"
                    from="abc"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ligula iaculis, mollis tellus semper, aliquet felis. Suspendisse et ligula at nunc tincidunt egestas vitae ut eros. Aliquam quis sem ac ligula bibendum pellentesque eu sit amet enim. Mauris rhoncus turpis ac venenatis suscipit. In accumsan est at felis ornaresit amet finibus turpis ultrices. Nunc varius finibus laoreet."
                    to="xyz"
                />
            </div>
        </section>
    )
}

export default WhyExists