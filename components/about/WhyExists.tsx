import Postcard from "@/components/postcards/Postcard"

const WhyExists = () => {
    return (
        <section className="grid grid-cols-[36rem_1fr_36rem] gap-10 items-center w-full">
            <Postcard
                stamp="flower"
                from="abc"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ligula iaculis, mollis tellus semper, aliquet felis. Suspendisse et ligula at nunc tincidunt egestas vitae ut eros. Aliquam quis sem ac ligula bibendum pellentesque eu sit amet enim. Mauris rhoncus turpis ac venenatis suscipit. In accumsan est at felis ornaresit amet finibus turpis ultrices. Nunc varius finibus laoreet."
                to="xyz"
            />

            <div className="text-center space-y-10">
                <h2>
                    Why this place even exists
                </h2>

                <p>
                    This project exists because not everything we feel needs to be spoken or answered. Some words are carried for too long — too heavy, too unfinished, or arriving only after it is already too late. Not every message finds its way to the person it was meant for. Still, writing those words down can matter, even if they are never sent anywhere.
                </p>
            </div>

            <Postcard
                stamp="flower"
                from="abc"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ligula iaculis, mollis tellus semper, aliquet felis. Suspendisse et ligula at nunc tincidunt egestas vitae ut eros. Aliquam quis sem ac ligula bibendum pellentesque eu sit amet enim. Mauris rhoncus turpis ac venenatis suscipit. In accumsan est at felis ornaresit amet finibus turpis ultrices. Nunc varius finibus laoreet."
                to="xyz"
            />
        </section>
    )
}

export default WhyExists