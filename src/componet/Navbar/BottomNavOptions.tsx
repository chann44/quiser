import { AiOutlineMessage, AiOutlinePlus, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import Button from "../../ui/Button"

const BottomNavOptions = () => {
    return (
        <>
            <div className="flex flex-col border-t">
                <Button Icon={AiOutlinePlus}>Create Project</Button>
                <Button Icon={AiOutlineUser}>Sign in</Button>
                <Button Icon={AiOutlineSetting}>Settings</Button>
                <Button Icon={AiOutlineMessage}>Faq</Button>
            </div>
        </>
    )
}

export default BottomNavOptions