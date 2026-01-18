import PostcardNote from "@/components/postcards/PostcardNote"

const WhatMean = () => {
    return (
        <section>
            <h2 className="text-center mb-30">
                What a "postcard" even mean here?
            </h2>

            <div className="flex items-center flex-col">
                <PostcardNote
                    text="Postcards are often written quickly, in moments of emotion or distance.
                    They carry fragments rather than full stories, sent without knowing how they will be received,
                    or if they will be kept at all."
                    rotate={12}
                />

                <PostcardNote
                    text="A postcard is small by design. It doesn’t hold everything, and it doesn’t try to.
                    There is only limited space, which forces honesty — what remains is what matters most."
                    rotate={-7}
                />

                <PostcardNote
                    text="Here, a postcard is a message to someone who may no longer be reachable —
                    a person, a moment, or a version of yourself that has already passed.
                    It doesn’t explain. It simply exists."
                    rotate={0}
                />
            </div>
        </section>
    )
}

export default WhatMean