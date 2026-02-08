interface MainHeaderProps {
    headerText: string;
    subheaderText: string;
    description: string;
}

const MainHeader = ({ headerText, subheaderText, description }: MainHeaderProps) => {
    return (
        <div>
            <header className="text-center xl:mb-14 md:mb-10 mb-6">
                <h1>{ headerText }</h1>
            </header>

            <section className="xl:w-1/2 md:w-3/4 w-full mx-auto text-center space-y-6 xl:mb-14 md:mb-12 mb-10">
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