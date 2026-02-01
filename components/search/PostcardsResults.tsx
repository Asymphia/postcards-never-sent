"use client"

import { Postcard as PostcardT } from "@prisma/client"
import { useEffect, useState } from "react"
import {getPostcards} from "@/app/actions"
import Postcard from "@/components/postcards/Postcard"
import {postcardStamp} from "@/components/postcards/PostcardStamp";

const PostcardsResults = () => {
    const [postcards, setPostcards] = useState<PostcardT[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetch = async () => {
            const results = await getPostcards()

            if(results.error) {
                setError(results.error || "Something went wrong")
                return
            }

            if(results.result) {
                setPostcards(results.result)
            }
        }

        fetch()
    }, [])

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                postcards && postcards.length > 0 && postcards.map(postcard => (
                    <Postcard from={postcard.from} to={postcard.to} text={postcard.message} stamp={postcard.stampText as postcardStamp} />
                ))
            }
        </div>
    )
}

export default PostcardsResults