import Postcard from "@/components/postcards/Postcard"
import { Postcard as PostcardT } from "@prisma/client"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import Share from "@/components/ui/Share"
import ReportPostcard from "@/components/ui/Report"

const FullCard = ({ postcard, type }: { postcard: PostcardT, type: "modal" | "single" }) => {
    return (
        <div className="w-full space-y-4 flex items-center flex-col">
            <Postcard text={postcard.message} from={postcard.from} to={postcard.to} stamp={postcard.stampText as postcardStamp} />

            <div className={`w-full flex flex-nowrap justify-between items-center ${ type === "modal" ? "text-text" : "text-bg" }`}>
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

                <div className="flex flex-nowrap gap-2">
                    <Share postcardId={postcard.id} />

                    <ReportPostcard postcardId={postcard.id} />
                </div>
            </div>
        </div>
    )
}

export default FullCard