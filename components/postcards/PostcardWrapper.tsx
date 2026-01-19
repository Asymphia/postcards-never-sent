const PostcardWrapper = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="border-solid border-8 border-accent outline-solid outline-2 outline-accent-dark p-5 h-[24rem] w-[36rem] min-w-[36rem] box-border bg-bg">
            { children }
        </div>
    )
}

export default PostcardWrapper