"use client"

import { Postcard as PostcardT } from "@prisma/client"
import { useCallback, useState } from "react"
import useDynamicSearch from "@/hooks/useDynamicSearch"
import SearchBar from "@/components/ui/SearchBar"
import PostcardsResults from "@/components/search/PostcardsResults"

const SearchClientSide = ({ postcards }: { postcards: PostcardT[] }) => {
    const [searchQuery, setSearchQuery] = useState<string>("")

    const { handleSearchChange, displayedData } = useDynamicSearch<PostcardT>(
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
            <SearchBar value={searchQuery} onChange={e => { setSearchQuery(e.target.value); handleSearchChange(e) }}  />

            {
                displayedData.length < postcards.length && displayedData.length > 0 && (
                    <p>Loaded {displayedData.length} of {postcards.length}. Update search query to load more accurate results.</p>
                )
            }

            <PostcardsResults postcards={displayedData} />
        </>
    )
}

export default SearchClientSide