import { ReactNode } from "react"

const PostCardLayout = ({ children, postcard_modal }: { children: ReactNode, postcard_modal: ReactNode }) => {
    return (
        <>
            { postcard_modal }
            { children }
        </>
    )
}

export default PostCardLayout