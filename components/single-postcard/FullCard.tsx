import Postcard from "@/components/postcards/Postcard"
import { Postcard as PostcardT } from "@prisma/client"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import Share from "@/components/ui/Share"

const FullCard = ({ postcard, type }: { postcard: PostcardT, type: "modal" | "single" }) => {
    return (
        <div className="space-y-4">
            <Postcard text={postcard.message} from={postcard.from} to={postcard.to} stamp={postcard.stampText as postcardStamp} />

            <div className={`flex flex-nowrap justify-between items-center ${ type === "modal" ? "text-text" : "text-bg" }`}>
                <p>
                    Created at: {" "}
                    <i>
                        {
                            new Date(postcard.createdAt).toLocaleString("en-US", {
                                dateStyle: "medium",
                                timeStyle: "short",
                            })
                        }
                    </i>
                </p>

                <Share postcardId={postcard.id} />
            </div>
        </div>
    )
}

export default FullCard