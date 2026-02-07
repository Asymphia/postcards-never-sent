import { notFound } from "next/navigation"
import { getPostcard } from "@/app/actions"
import Postcard from "@/components/postcards/Postcard"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import GoBackButton from "@/components/ui/GoBackButton";

interface PostcardDetailsProps {
    params: {
        id: string
    }
}

const PostcardDetails = async ({ params }: PostcardDetailsProps) => {
    const { id } = await params
    const numericId = Number(id)

    if (isNaN(numericId)) {
        notFound()
    }

    const results = await getPostcard(numericId)

    if(!results.success) {
        throw new Error(results.error || "An error occurred");
    }

    const postcard = results.result
    if (!postcard) notFound()

    return (
        <div className="mx-auto w-fit space-y-8">
            <Postcard text={postcard.message} from={postcard.from} to={postcard.to} stamp={postcard.stampText as postcardStamp} />

            <GoBackButton />
        </div>
    )
}

export default PostcardDetails