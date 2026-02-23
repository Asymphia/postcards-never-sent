import { getPostcards } from "@/actions/postcards-actions"
import { Postcard as PostcardT } from "@prisma/client"
import SearchClientSide from "@/components/search/SearchClientSide"

const SearchContent = async () => {
    const results = await getPostcards()

    if(!results.success){
        throw new Error(results.error || "Failed to load postcards.")
    }

    const postcards: PostcardT[] = results.result || []

    return (
        <SearchClientSide postcards={postcards} />
    )
}

export default SearchContent