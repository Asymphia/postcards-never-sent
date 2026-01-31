"use client"

import PostcardWrapper from "../postcards/PostcardWrapper"
import PostcardStamp, { postcardStamp } from "@/components/postcards/PostcardStamp"
import PostcardFromTo from "@/components/postcards/PostcardFromTo"
import { gsap } from "gsap"
import { Draggable } from "gsap/dist/Draggable"
import { useLayoutEffect, useRef } from "react"

gsap.registerPlugin(Draggable)

gsap.registerPlugin(Draggable)

interface SecondStepProps {
    text: string
    from: string
    to: string
    selectedStamp: postcardStamp | null
    setSelectedStamp: (newStamp: postcardStamp | null) => void
}

const SecondStep = ({ text, from, to, selectedStamp, setSelectedStamp }: SecondStepProps) => {

    const dropTargetRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const stamps = gsap.utils.toArray<HTMLElement>(".draggable-stamp")
            const target = dropTargetRef.current
            if (!target) return

            const positionSavedStamp = () => {
                if (selectedStamp) {
                    const activeStamp = stamps.find(s => s.getAttribute("data-stamp") === selectedStamp)
                    if (activeStamp) {
                        const targetRect = target.getBoundingClientRect()

                        gsap.set(activeStamp, { x: 0, y: 0 })
                        const resetRect = activeStamp.getBoundingClientRect()

                        gsap.set(activeStamp, {
                            x: targetRect.left - resetRect.left,
                            y: targetRect.top - resetRect.top,
                            zIndex: 40
                        })
                        activeStamp.setAttribute("data-placed", "true")
                    }
                }
            }

            const timeoutId = setTimeout(positionSavedStamp, 10)

            Draggable.create(stamps, {
                bounds: containerRef.current,
                onDragStart: function() {
                    gsap.set(this.target, { zIndex: 50 })
                },
                onDragEnd: function () {
                    const stampElement = this.target as HTMLElement
                    const stampName = stampElement.getAttribute("data-stamp") as postcardStamp

                    if (this.hitTest(target, "50%")) {
                        const targetRect = target.getBoundingClientRect()
                        const stampRect = stampElement.getBoundingClientRect()

                        const curX = gsap.getProperty(stampElement, "x") as number
                        const curY = gsap.getProperty(stampElement, "y") as number

                        const deltaX = curX + (targetRect.left - stampRect.left)
                        const deltaY = curY + (targetRect.top - stampRect.top)

                        stamps.forEach(s => {
                            if (s !== stampElement && s.getAttribute("data-placed") === "true") {
                                gsap.to(s, { x: 0, y: 0, duration: 0.5, ease: "power2.out" })
                                s.setAttribute("data-placed", "false")
                            }
                        })

                        gsap.to(stampElement, {
                            x: deltaX,
                            y: deltaY,
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        })

                        stampElement.setAttribute("data-placed", "true")
                        setSelectedStamp(stampName)
                    } else {
                        gsap.to(stampElement, {
                            x: 0,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.set(stampElement, { zIndex: 10 })
                            }
                        })
                        stampElement.setAttribute("data-placed", "false")

                        if (stampName === selectedStamp) {
                            setSelectedStamp(null)
                        }
                    }
                }
            })

            return () => clearTimeout(timeoutId)
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const stampListLeft: postcardStamp[] = ["flower", "christmas", "coffee", "books"]
    const stampListRight: postcardStamp[] = ["mountains", "pink flowers", "plum", "blue flowers"]

    return (
        <>
            <div ref={containerRef} className="flex gap-x-10">
                <div className="flex flex-col justify-between">
                    {stampListLeft.map((s) => (
                        <div key={s} className="draggable-stamp cursor-grab active:cursor-grabbing" data-stamp={s}>
                            <PostcardStamp stamp={s} />
                        </div>
                    ))}
                </div>

                <PostcardWrapper>
                    <div className="h-full grid grid-cols-2 gap-x-4">
                        <div className="h-full w-full relative wrap-break-word">
                            { text }
                        </div>


                        <div className="flex flex-col justify-between items-end">
                            <div className={`size-16 border-2 border-solid  transition-all ${!selectedStamp ? "border-accent" : "border-bg"}`} ref={dropTargetRef}>

                            </div>

                            <PostcardFromTo from={ from } to={ to } />
                        </div>
                    </div>
                </PostcardWrapper>

                <div className="flex flex-col justify-between">
                    {stampListRight.map((s) => (
                        <div key={s} className="draggable-stamp cursor-grab active:cursor-grabbing" data-stamp={s}>
                            <PostcardStamp stamp={s} />
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center">
                Drag & Drop stamps in order to place them in the postcard.
            </p>
        </>
    )
}

export default SecondStep