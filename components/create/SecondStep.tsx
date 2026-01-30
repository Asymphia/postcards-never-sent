interface SecondStepProps {
    text: string
    from: string
    to: string
}

const SecondStep = ({ text, from, to }: SecondStepProps) => {
    return (
        <>
            <div className="h-full w-full relative break-all">
                { text }
            </div>

            <div className="font-dm text-header text-xl space-y-3 self-end">
                <p className="border-b-2 border-b-solid border-b-accent pb-1">
                    FROM:{" "}
                    { from }
                </p>
                <p className="border-b-2 border-b-solid border-b-accent pb-1">
                    TO:{" "}
                    { to }
                </p>
            </div>
        </>
    )
}

export default SecondStep