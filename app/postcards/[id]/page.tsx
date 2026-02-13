import { notFound } from "next/navigation"
import { getPostcard } from "@/actions/postcards-actions"
import GoBackButton from "@/components/ui/GoBackButton"
import FullCard from "@/components/single-postcard/FullCard"

const PostcardPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const numericId = Number(id)

    if (isNaN(numericId)) {
        notFound()
    }

    const results = await getPostcard(numericId)

    if(!results.success) {
        throw new Error(results.error || "An error occurred")
    }

    const postcard = results.result
    if (!postcard) notFound()

    return (
        <div className="w-full xl:max-w-[36rem] md:max-w-[32rem] max-w-[26rem] mx-auto space-y-8">
            <FullCard postcard={postcard} type="modal" />

            <GoBackButton />
        </div>
    )
}

export default PostcardPage