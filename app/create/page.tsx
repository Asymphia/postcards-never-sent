import MainHeader from "@/components/ui/MainHeader"
import CreateForm from "@/components/create/CreateForm"

const CreatePage = () => {
    return (
        <div className="space-y-28">
            <MainHeader
                headerText="Create your postcard"
                subheaderText="Submit your own postcard"
                description="Create postcard to someone special to You. You can enter message to them,
                    as well as your name or nickname and thair name or nickname"
            />

            <CreateForm />
        </div>
    )
}

export default CreatePage