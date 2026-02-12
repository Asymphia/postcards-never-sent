import StampsHeart from "@/components/about/StampsHeart"

const WhatHappens = () => {
    return (
        <section className="w-full max-w-[75rem] mx-auto grid md:grid-cols-2 grid-cols-1 xl:gap-20 md:gap-12 gap-10 items-center">
            <div className="xl:space-y-10 md:space-y-8 space-y-6">
                <h2 className="md:text-left text-center">
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