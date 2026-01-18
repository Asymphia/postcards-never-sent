import stampFlower from "@/assets/stamp_flower.svg"
import Image from "next/image"

const StampsHeart = () => {
    return (
        <div
            className="grid w-fit justify-self-center gap-1"
            style={{
                gridTemplateColumns: "repeat(7, 1fr)",
                gridTemplateRows: "repeat(7, 1fr)",
                gridTemplateAreas: `
                  ". Heart1 Heart2 . Heart4 Heart5 ."
                  "Heart17 . . Heart3 . . Heart6"
                  "Heart16 . . . . . Heart7"
                  "Heart15 . . . . . Heart8"
                  ". Heart13 . . . Heart9 ."
                  ". . Heart12 . Heart10 . ."
                  ". . . Heart11 . . ."
                `,
            }}
        >
            {[
                "Heart1","Heart2","Heart3","Heart4","Heart5","Heart6","Heart7","Heart8",
                "Heart9","Heart10","Heart11","Heart12","Heart13","Heart15","Heart16","Heart17"
            ].map((area) => (
                <div key={area} style={{ gridArea: area }} className="flex justify-center items-center">
                    <Image
                        src={stampFlower}
                        alt="A stamp with a flower"
                        className="w-16 h-16"
                    />
                </div>
            ))}
        </div>
    )
}

export default StampsHeart