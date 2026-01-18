import StampsHeart from "@/components/about/StampsHeart"

const WhatHappens = () => {
    return (
        <section className="w-full max-w-[75rem] mx-auto grid grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <h2>
                    What happens to the postcards
                </h2>

                <p>
                    Postcards here aren’t delivered. They never reach the person they were written to, and they are not meant to.
                    There is no destination, no confirmation, no response waiting on the other side.
                    These messages exist only as a record of feeling — written, shared briefly, and then released.
                    Nothing is asked of them, and nothing is expected in return.
                </p>
            </div>

            <StampsHeart />
        </section>
    )
}

export default WhatHappens