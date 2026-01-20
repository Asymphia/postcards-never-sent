import Link from "next/link"
import React from "react"

type AnchorProps = React.ComponentProps<"a">

const Anchor: React.FC<AnchorProps> = ({ href = "", children, ...props }) => {
    if (!href) return <a {...props}>{children}</a>

    const isInternal = href.startsWith('/')

    if(isInternal) {
        return (
            <Link href={href} {...props} className="underline transition-all hover:text-accent active:text-accent-dark">
                { children }
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} className="underline transition-all hover:text-accent active:text-accent-dark">
            { children }
        </a>
    )
}

export default Anchor