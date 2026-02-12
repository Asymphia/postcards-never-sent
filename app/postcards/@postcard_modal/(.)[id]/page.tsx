import { notFound } from "next/navigation"
import { getPostcard } from "@/actions/actions"
import Modal from "@/components/ui/Modal"
import FullCard from "@/components/single-postcard/FullCard"

const PostcardModal = async ({ params }: { params: { id: string } }) => {
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
        <Modal additionalStyles={false}>
            <div className="w-full max-w-[36rem]">
                <FullCard postcard={postcard} type="single" />
            </div>
        </Modal>
    )
}

export default PostcardModal