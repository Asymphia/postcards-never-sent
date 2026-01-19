"use client"

import Link from "next/link"
import {useEffect, useRef, useState} from "react"
import gsap from "gsap"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: "/", title: "Search" },
        { href: "/", title: "Create new" },
        { href: "/about", title: "About" },
        { href: "/", title: "Contact us" },
        { href: "/", title: "Terms & conditions" },
    ]

    const navRef = useRef<HTMLDivElement>(null)
    const linksRef = useRef<HTMLAnchorElement[]>([])
    const tl = useRef<gsap.core.Timeline | null>(null)

    const bar1 = useRef<SVGRectElement | null>(null)
    const bar2 = useRef<SVGRectElement | null>(null)
    const bar3 = useRef<SVGRectElement | null>(null)
    const iconTl = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        if (!navRef.current) return

        tl.current = gsap.timeline({ paused: true })

        tl.current.fromTo(
            linksRef.current,
            {
                opacity: 0,
                y: -10
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "circ.out",
                stagger: 0.06,
            }
        )
    }, [])

    useEffect(() => {
        if (!bar1.current || !bar2.current || !bar3.current) return

        gsap.set([bar1.current, bar2.current, bar3.current], {
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
        })

        iconTl.current = gsap.timeline({ paused: true })

        iconTl.current.to(
            bar1.current,
            {
                y: 13,
                x: -10,
                rotation: 45,
                duration: 0.35,
                ease: "circ.out"
            },
            0
        )

        iconTl.current.to(
            bar2.current,
            {
                opacity: 0,
                scaleX: 0.2,
                duration: 0.35,
                ease: "circ.out",
            },
            0
        )

        iconTl.current.to(
            bar3.current,
            {
                y: -13,
                x: 10,
                rotation: -45,
                duration: 0.35,
                ease: "circ.out",
            },
            0
        )
    }, [])

    useEffect(() => {
        if (isOpen) {
            iconTl.current?.play()
            tl.current?.play()
        } else {
            iconTl.current?.reverse()
            tl.current?.reverse()
        }
    }, [isOpen])

    return (
        <div className="fixed z-20 top-10 right-10 flex flex-col items-end space-y-6">
            <button aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-header"
                    role="img"
                    aria-hidden="true"
                >
                    <rect ref={bar1} x="4" y="7" width="24" height="2.4" rx="1.2" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
                    <rect ref={bar2} x="4" y="14.8" width="24" height="2.4" rx="1.2" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
                    <rect ref={bar3} x="4" y="22.6" width="24" height="2.4" rx="1.2" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
                </svg>
            </button>

            <nav ref={navRef} className="font-dm text-header text-xl flex flex-col text-right space-y-1 pointer-events-none">
                {
                    links.map((link, i) => (
                        <Link
                            href={link.href}
                            key={link.title}
                            ref={el => {
                                if(el) linksRef.current[i] = el
                            }}
                            className="transition-colors hover:text-accent active:text-accent-dark pointer-events-auto"
                        >
                            { link.title }
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Menu