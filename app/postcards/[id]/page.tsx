import { notFound } from "next/navigation"
import GoBackButton from "@/components/ui/GoBackButton"
import PostcardContent from "@/components/single-postcard/PostcardContent"
import { Suspense } from "react"
import Loader from "@/components/ui/Loader"

const PostcardPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const numericId = Number(id)

    if (isNaN(numericId)) {
        notFound()
    }

    return (
        <div className="w-full xl:max-w-[36rem] md:max-w-[32rem] max-w-[26rem] mx-auto space-y-8">
            <Suspense fallback={<Loader />}>
                <PostcardContent id={ numericId } />
            </Suspense>

            <GoBackButton />
        </div>
    )
}

export default PostcardPage