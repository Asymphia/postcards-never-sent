"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { Observer } from "gsap/dist/Observer"
import Postcard from "@/components/postcards/Postcard"

gsap.registerPlugin(Observer);

const SCROLL_MULTIPLIER = 0.008
const MAX_SPEED = 3
const BASE_IDLE_SPEED = 0.05
const DECAY = 0.2

const PostcardsCarousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const scrollerRef = useRef<HTMLDivElement | null>(null)

    const items = [
        <Postcard key="p1" stamp="flower" from="abc" to="xyz" text="Lorem ipsum dolor sit amet..." />,
        <Postcard key="p2" stamp="flower" from="abc" to="xyz" text="Consectetur adipiscing elit..." />,
        <Postcard key="p3" stamp="flower" from="abc" to="xyz" text="Quisque vel ligula iaculis..." />,
        <Postcard key="p4" stamp="flower" from="abc" to="xyz" text="Suspendisse et ligula at nunc..." />,
        <Postcard key="p5" stamp="flower" from="abc" to="xyz" text="Mauris rhoncus turpis ac venenatis..." />,
    ]

    useEffect(() => {
        if (!scrollerRef.current || !containerRef.current) return

        const scroller = scrollerRef.current
        const container = containerRef.current

        const totalScrollWidth = scroller.scrollWidth
        const singleWidth = totalScrollWidth / 2 || container.clientWidth

        let pos = 0
        let velocity = BASE_IDLE_SPEED
        let lastDirection = 1

        const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

        const observer = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            onWheel: (self) => {
                const d = self.deltaY || 0
                const newV = d * SCROLL_MULTIPLIER * -1
                velocity = clamp(newV, -MAX_SPEED, MAX_SPEED)
                if (velocity !== 0) lastDirection = Math.sign(velocity)
            },
            wheelSpeed: -1,
        });

        const tick = (_time: number, delta: number) => {
            const targetIdle = BASE_IDLE_SPEED * lastDirection
            velocity += (targetIdle - velocity) * DECAY

            pos += velocity * delta

            const wrapped = gsap.utils.wrap(-singleWidth, 0, pos)

            scroller.style.transform = `translate3d(${wrapped}px, 0, 0)`
        }

        gsap.ticker.add(tick)

        return () => {
            gsap.ticker.remove(tick)
            observer?.kill()
        }
    }, [])

    return (
        <div ref={containerRef} className="w-full relative overflow-visible" style={{ touchAction: "pan-y" }} >
            <div ref={scrollerRef} className="flex gap-4 whitespace-nowrap items-start">
                {
                    items.map((el, i) => (
                        <div key={`a-${i}`} className="flex-none">
                            {el}
                        </div>
                    ))
                }

                {
                    items.map((el, i) => (
                        <div key={`b-${i}`} className="flex-none">
                            {el}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostcardsCarousel;
