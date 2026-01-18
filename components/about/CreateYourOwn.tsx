import Postcard from "@/components/postcards/Postcard"
import Button from "@/components/ui/Button"

const CreateYourOwn = () => {
    return (
        <section className="w-full max-w-[75rem] mx-auto grid grid-cols-2 gap-20 items-center">
            <Postcard
                stamp="flower"
                from="abc"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ligula iaculis, mollis tellus semper, aliquet felis. Suspendisse et ligula at nunc tincidunt egestas vitae ut eros. Aliquam quis sem ac ligula bibendum pellentesque eu sit amet enim. Mauris rhoncus turpis ac venenatis suscipit. In accumsan est at felis ornaresit amet finibus turpis ultrices. Nunc varius finibus laoreet."
                to="xyz"
            />

            <div className="space-y-10">
                <h2>
                    Create your own postcard today!
                </h2>

                <p>
                    Postcards here aren’t delivered. They never reach the person they were written to,
                    and they are not meant to. There is no destination, no confirmation,
                    no response waiting on the other side. These messages exist only as a record of feeling — written,
                    shared briefly, and then released. Nothing is asked of them, and nothing is expected in return.
                </p>

                <Button />
            </div>
        </section>
    )
}

export default CreateYourOwn