import { notFound } from "next/navigation"
import Modal from "@/components/ui/Modal"
import PostcardContent from "@/components/single-postcard/PostcardContent"
import { Suspense } from "react"
import Loader from "@/components/ui/Loader"

const PostcardModal = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const numericId = Number(id)

    if (isNaN(numericId)) {
        notFound()
    }

    return (
        <Modal additionalStyles={false}>
            <div className="xl:w-[36rem] md:w-[32rem] w-[26rem]">
                <Suspense fallback={<Loader />} >
                    <PostcardContent id={ numericId } />
                </Suspense>
            </div>
        </Modal>
    )
}

export default PostcardModal