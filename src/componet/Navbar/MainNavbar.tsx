import Button from "../../ui/Button";
import Logo from "./Logo";
import {
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

const MainNavbar = () => {
  return (
    <nav className="flex h-full flex-col justify-between p-2">
      <Logo />
      <div className="flex flex-col border-t">
        <Button Icon={AiOutlinePlus}>Create Project</Button>
        <Button Icon={AiOutlineUser}>Sign in</Button>
        <Button Icon={AiOutlineSetting}>Settings</Button>
        <Button Icon={AiOutlineMessage}>Faq</Button>
      </div>
    </nav>
  );
};

export default MainNavbar;
