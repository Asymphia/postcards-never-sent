import { getPostcard } from "@/actions/postcards-actions"
import { notFound } from "next/navigation"
import FullCard from "@/components/single-postcard/FullCard"

const PostcardContent = async ({ id }: { id: number }) => {
    const results = await getPostcard(id)

    if (!results.success) {
        throw new Error(results.error || "An error occurred")
    }

    const postcard = results.result
    if (!postcard) notFound()

    return <FullCard postcard={ postcard } type="modal" />
}

export default PostcardContent