import border from "@/assets/border.svg"

const PostcardWrapper = () => {
    return (
        <div
            style={{
                borderStyle: "solid",
                borderWidth: "10px",
                borderImage: `url('../../../assets/border.svg') 10 round`,
            }}
            className="w-[200px] h-[80px]"
        >
            aaa
        </div>
    )
}

export default PostcardWrapper