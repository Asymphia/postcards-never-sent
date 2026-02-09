import { notFound } from "next/navigation"
import { getPostcard } from "@/app/actions"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import Postcard from "@/components/postcards/Postcard"
import Modal from "@/components/ui/Modal"

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
            <Postcard text={postcard.message} from={postcard.from} to={postcard.to} stamp={postcard.stampText as postcardStamp} />
        </Modal>
    )
}

export default PostcardModal