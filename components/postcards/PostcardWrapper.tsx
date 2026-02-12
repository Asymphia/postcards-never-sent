const PostcardWrapper = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="border-solid xl:border-8 md:border-6 border-4 border-accent outline-solid outline-2 outline-accent-dark xl:p-5 md:p-4 p-3 xl:h-[24rem] md:h-[20rem] h-[14rem] xl:max-w-[36rem] md:max-w-[32rem] max-w-[26rem] w-full box-border bg-bg">
            { children }
        </div>
    )
}

export default PostcardWrapper