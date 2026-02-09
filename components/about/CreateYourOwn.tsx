"use client"

import Postcard from "@/components/postcards/Postcard"
import Button from "@/components/ui/Button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const CreateYourOwn = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const postcardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!postcardRef) return

        let ctx = gsap.context(() => {
            gsap.fromTo(postcardRef.current,
                {
                    opacity: 0,
                    x: -200
                },
                {
                    opacity: 1,
                    x: 0,
                    ease: "power1.out",
                    duration: 0.6,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="w-full max-w-[75rem] mx-auto grid grid-cols-2 gap-20 items-center overflow-x-visible">
            <div ref={postcardRef}>
                <Postcard
                    stamp="flower"
                    from="abc"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ligula iaculis, mollis tellus semper, aliquet felis. Suspendisse et ligula at nunc tincidunt egestas vitae ut eros. Aliquam quis sem ac ligula bibendum pellentesque eu sit amet enim. Mauris rhoncus turpis ac venenatis suscipit. In accumsan est at felis ornaresit amet finibus turpis ultrices. Nunc varius finibus laoreet."
                    to="xyz"
                />
            </div>

            <div className="space-y-10">
                <h2>
                    Create your own postcard today!
                </h2>

                <p>
                    Postcards here aren’t delivered. They never reach the person they were written to,
                    and they are not meant to. There is no destination, no confirmation,
                    no response waiting on the other side. These messages exist only as a record of feeling — written,
                    shared briefly, and then released. Nothing is asked of them, and nothing is expected in return.
                </p>

                <Button text="Create" />
            </div>
        </section>
    )
}

export default CreateYourOwn