"use client"

import {useCallback, useEffect, useState} from "react"
import { Postcard as PostcardT } from "@prisma/client"
import { getPostcards } from "@/actions/actions"
import SearchBar from "@/components/ui/SearchBar"
import PostcardsResults from "@/components/search/PostcardsResults"
import useDynamicSearch from "@/hooks/useDynamicSearch"

const SearchContent = () => {
    const [postcards, setPostcards] = useState<PostcardT[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            const results = await getPostcards()

            if(results.error) {
                setError(results.error || "Something went wrong")
                setLoading(false)
                return
            }

            setLoading(false)
            if(results.result) {
                setPostcards(results.result)
            }
        }

        fetch()
    }, [])

    const { searchQuery, handleSearchChange, displayedData } = useDynamicSearch<PostcardT>(
        postcards,
        useCallback(
            (p, q) =>
                !!(
                    p.from?.toLowerCase().includes(q) ||
                    p.to?.toLowerCase().includes(q) ||
                    p.message?.toLowerCase().includes(q) ||
                    p.stampText?.toLowerCase().includes(q)
                ),
            []),
            { debounceMs: 150, displayLimit: 30 }
    )

    return (
        <>
            <SearchBar value={searchQuery} onChange={handleSearchChange}  />

            {
                displayedData.length < postcards.length && displayedData.length > 0 && (
                    <p>Loaded {displayedData.length} of {postcards.length}. Update search query to load more accurate results.</p>
                )
            }

            <PostcardsResults postcards={displayedData} error={error} loading={loading} />
        </>
    )
}

export default SearchContent