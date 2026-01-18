const PostcardWrapper = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="border-solid border-8 p-5 h-[24rem] w-[36rem] min-w-[36rem] box-border bg-bg" style={{ borderImage: "url(/border.svg) 1 repeat" }}>
            { children }
        </div>
    )
}

export default PostcardWrapper