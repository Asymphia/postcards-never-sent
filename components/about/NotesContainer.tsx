"use client"

import PostcardNote from "@/components/postcards/PostcardNote"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const NotesContainer = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cards = gsap.utils.toArray<HTMLDivElement>(".postcard-note")
        const directions = [1, -1, 1]

        cards.forEach((card, i) => {
            const dir = directions[i] || 1
            const finalRotate = parseFloat(card.getAttribute('data-rotate') || "0")

            gsap.fromTo(
                card,
                {
                    x: 300 * dir,
                    y: 50,
                    opacity: 0,
                    rotate: finalRotate + (dir * 25),
                    scale: 0.9,
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: finalRotate,
                    scale: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: 1,
                    }
                }
            )
        }, containerRef)

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="flex items-center flex-col">
            <PostcardNote
                text="Postcards are often written quickly, in moments of emotion or distance.
                    They carry fragments rather than full stories, sent without knowing how they will be received,
                    or if they will be kept at all."
                rotate={12}
            />

            <PostcardNote
                text="A postcard is small by design. It doesn’t hold everything, and it doesn’t try to.
                    There is only limited space, which forces honesty — what remains is what matters most."
                rotate={-7}
            />

            <PostcardNote
                text="Here, a postcard is a message to someone who may no longer be reachable —
                    a person, a moment, or a version of yourself that has already passed.
                    It doesn’t explain. It simply exists."
                rotate={0}
            />
        </div>
    )
}

export default NotesContainer