import { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Single postcard | Postcards Never Sent",
    description: "Read an anonymous postcard from Postcards Never Sent. Discover who it’s from, who it’s to, and the message that was never delivered but still resonates."
}

const PostCardLayout = ({ children, postcard_modal }: { children: ReactNode, postcard_modal: ReactNode }) => {
    return (
        <>
            { postcard_modal }
            { children }
        </>
    )
}

export default PostCardLayout