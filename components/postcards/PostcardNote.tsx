import PostcardStamp from "@/components/postcards/PostcardStamp"
import PostcardWrapper from "@/components/postcards/PostcardWrapper"

const PostcardNote = ({ text, rotate }: { text: string, rotate: number }) => {
    return (
        <div style={{ transform: `rotate(${rotate}deg)` }} className="shadow-lg">
            <PostcardWrapper>
                <div className="w-full h-full relative flex justify-center items-center text-center">
                    <div className="absolute top-0 right-0">
                        <PostcardStamp stamp="flower" />
                    </div>

                    <p>
                        { text }
                    </p>
                </div>
            </PostcardWrapper>
        </div>
    )
}

export default PostcardNote