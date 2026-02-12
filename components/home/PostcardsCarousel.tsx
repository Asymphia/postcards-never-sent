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
        <Postcard
            key="p1"
            stamp="coffee"
            from="The one who left"
            to="The kitchen at 2 a.m."
            text="I still expect to see you leaning against the counter,
                half-asleep, pretending you weren’t waiting for me.
                The apartment is quieter now. Even the fridge hum feels louder without
                our unfinished conversations."
        />,
        <Postcard
            key="p2"
            stamp="books"
            from="Your future self"
            to="Me, right now"
            text="You won’t always feel this lost. One day this confusion will become a story
                you tell with a small smile. Keep going. The version of us who made it is
                quietly rooting for you."
        />,
        <Postcard
            key="p3"
            stamp="pink flowers"
            from="The friend who drifted away"
            to="You"
            text="We didn’t end with a fight. Just silence. I sometimes scroll to your name and
                wonder if you’d answer. I hope life is gentle with you, even if we’re no longer
                part of each other’s days."
        />,
        <Postcard
            key="p4"
            stamp="christmas"
            from="Your daughter"
            to="Dad"
            text="I know you tried in the only ways you knew how. I needed different ones.
                I’m still learning how to hold both gratitude and hurt in the same hand."
        />,
        <Postcard
            key="p5"
            stamp="mountains"
            from="Someone you passed on the train"
            to="The stranger with tired eyes"
            text="You looked like you were carrying the whole week on your shoulders.
                I almost told you it’s okay to rest. I didn’t. But I hope something small
                and kind found you that day."
        />,
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
            <div ref={scrollerRef} className="flex gap-4 items-start">
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
