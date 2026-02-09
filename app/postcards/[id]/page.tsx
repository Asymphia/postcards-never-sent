import { notFound } from "next/navigation"
import { getPostcard } from "@/app/actions"
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
        <div className="mx-auto w-fit space-y-8">
            <FullCard postcard={postcard} type="modal" />

            <GoBackButton />
        </div>
    )
}

export default PostcardPage