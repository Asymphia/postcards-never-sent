interface PostcardFromToProps {
    from: string
    to: string
}

const PostcardFromTo = ({ from, to }: PostcardFromToProps) => {
    return (
        <div className="font-dm text-header xl:text-xl md:text-lg text-base w-full space-y-3 leading-tight">
            <p className="w-full border-b-2 border-b-solid border-b-accent pb-1 overflow-hidden">
                FROM: { from }
            </p>
            <p className="w-full border-b-2 border-b-solid border-b-accent pb-1 overflow-hidden">
                TO: { to }
            </p>
        </div>
    )
}

export default PostcardFromTo