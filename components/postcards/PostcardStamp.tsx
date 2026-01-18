import Image from "next/image"
import stampImg from "@/assets/stamp_flower.svg"

export type postcardStamp = "flower" | "fruits"

const PostcardStamp = ({ stamp }: { stamp: postcardStamp }) => {
    return (
        <div className="size-16">
            <Image src={stampImg} alt="An image of a stamp with flower" />
        </div>
    )
}

export default PostcardStamp