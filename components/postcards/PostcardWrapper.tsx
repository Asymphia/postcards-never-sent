import { ReactNode } from "react"

const PostcardWrapper = ({ children } : { children: ReactNode }) => {
    return (
        <div className="w-[24rem] max-w-[90vw] md:w-[30rem] lg:w-[36rem] aspect-[3/2]
                border-solid border-accent outline-solid outline-2 outline-accent-dark
                border-4 md:border-8 p-3 md:p-5 relative flex flex-col
                box-border bg-bg overflow-hidden"
        >
            { children }
        </div>
    )
}

export default PostcardWrapper