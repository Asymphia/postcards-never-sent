interface MainHeaderProps {
    headerText: string;
    subheaderText: string;
    description: string;
}

const MainHeader = ({ headerText, subheaderText, description }: MainHeaderProps) => {
    return (
        <div>
            <header className="text-center mb-14">
                <h1>{ headerText }</h1>
            </header>

            <section className="w-1/2 mx-auto text-center space-y-6 mb-14">
                <p className="uppercase italic">
                    { subheaderText }
                </p>

                <p>
                    { description }
                </p>
            </section>
        </div>
    )
}

export default MainHeader