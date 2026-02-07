import Postcard from "@/components/postcards/Postcard"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import Link from "next/link"
import Loader from "@/components/ui/Loader"
import { Postcard as PostcardT } from "@prisma/client"

const PostcardsResults = ({ error, loading, postcards }: { error?: string | null, loading?: boolean, postcards?: PostcardT[] }) => {

    if(error){
        return <p className="text-accent text-center">{ error }</p>
    }

    if(loading){
        return <Loader />
    }

    if(!postcards || postcards.length === 0){
        return <p className="text-accent text-center">No postcards found.</p>
    }

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                postcards && postcards.length > 0 && postcards.map(postcard => (
                    <Link href={`/postcard/${postcard.id}`} key={postcard.id}>
                        <Postcard from={postcard.from} to={postcard.to} text={postcard.message} stamp={postcard.stampText as postcardStamp} />
                    </Link>
                ))
            }
        </div>
    )
}

export default PostcardsResults