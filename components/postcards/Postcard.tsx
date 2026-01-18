import PostcardWrapper from "@/components/postcards/PostcardWrapper"
import PostcardStamp from "@/components/postcards/PostcardStamp"
import PostcardFromTo from "@/components/postcards/PostcardFromTo"
import { postcardStamp } from "@/components/postcards/PostcardStamp"

interface PostcardProps {
    text: string
    from: string
    to: string
    stamp: postcardStamp
}

const Postcard = ({ text, from, to, stamp }: PostcardProps) => {
    return (
        <PostcardWrapper>
            <div className="h-full grid grid-cols-2 space-x-6">
                <p>
                    { text }
                </p>

                <div className="flex flex-col justify-between items-end">
                    <PostcardStamp stamp={ stamp } />

                    <PostcardFromTo from={ from } to={ to } />
                </div>
            </div>
        </PostcardWrapper>
    )
}

export default Postcard