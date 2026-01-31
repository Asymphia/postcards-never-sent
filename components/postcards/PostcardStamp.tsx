import Image from "next/image"
import stampFlower from "@/assets/stamps/stamp_flower.svg"
import stampChristmas from "@/assets/stamps/stamp_christmas.svg"
import stampCoffee from "@/assets/stamps/stamp_coffee.svg"
import stampBooks from "@/assets/stamps/stamp_books.svg"
import stampMountains from "@/assets/stamps/stamp_mountains.svg"
import stampPlum from "@/assets/stamps/stamp_plum.svg"
import stampFlowerPink from "@/assets/stamps/stamp_flowers_pink.svg"
import stampFlowerBlue from "@/assets/stamps/stamp_flower_blue.svg"

export type postcardStamp = "flower" | "christmas" | "coffee" | "books" | "mountains" | "plum" | "pink flowers" | "blue flowers"

const PostcardStamp = ({ stamp = "flower" }: { stamp: postcardStamp }) => {
    let stampImg

    switch (stamp) {
        case "flower": stampImg = stampFlower; break
        case "christmas": stampImg = stampChristmas; break
        case "coffee": stampImg = stampCoffee; break
        case "books": stampImg = stampBooks; break
        case "mountains": stampImg = stampMountains; break
        case "plum": stampImg = stampPlum; break
        case "pink flowers": stampImg = stampFlowerPink; break
        case "blue flowers": stampImg = stampFlowerBlue; break
    }

    return (
        <div className="size-16 pointer-events-none select-none">
            <Image src={stampImg} alt={`Stamp ${stamp}`} className="w-full h-full object-contain" />
        </div>
    )
}

export default PostcardStamp