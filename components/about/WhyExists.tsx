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
        <section ref={containerRef} className="grid grid-cols-[36rem_1fr_36rem] gap-10 items-center w-full overflow-x-visible">
            <div ref={leftPostcardRef}>
                <Postcard
                    stamp="coffee"
                    from="Me you loved"
                    text="I replay our last conversation more than I admit. Not to change it — just to sit with the
                        spaces between our words. We were both trying, just in different directions.
                        I don’t blame you anymore. I just wish we had known that love isn’t always enough to
                        make two futures align."
                    to="The one who couldn’t stay"
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
                    from="Your younger sibling"
                    text="When I was little, you felt invincible. You fixed broken toys and scared away nightmares.
                        Growing up meant realizing you were scared too. I’m sorry for the years I mistook your silence
                        for strength. I hope one day we learn how to talk without armor."
                    to="The hero"
                />
            </div>
        </section>
    )
}

export default WhyExists