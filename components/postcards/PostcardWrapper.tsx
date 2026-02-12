import { ReactNode } from "react"

const PostcardWrapper = ({ children } : { children: ReactNode }) => {
    return (
        <div className="border-solid border-accent outline-solid outline-2 outline-accent-dark border-4 md:border-6 xl:border-8 p-3 md:p-4 xl:p-5 w-full max-w-[26rem] md:max-w-[32rem] xl:max-w-[36rem] aspect-[3/2] min-h-fit relative flex flex-col box-border bg-bg overflow-hidden">
            { children }
        </div>
    )
}

export default PostcardWrapper