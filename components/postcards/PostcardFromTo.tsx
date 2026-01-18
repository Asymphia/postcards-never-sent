interface PostcardFromToProps {
    from: string
    to: string
}

const PostcardFromTo = ({ from, to }: PostcardFromToProps) => {
    return (
        <div className="font-dm text-header text-xl w-full space-y-3">
            <p className="w-full border-b-2 border-b-solid border-b-accent pb-1">
                FROM: { from }
            </p>
            <p className="w-full border-b-2 border-b-solid border-b-accent pb-1">
                TO: { to }
            </p>
        </div>
    )
}

export default PostcardFromTo