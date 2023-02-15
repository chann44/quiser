import Button from "../../ui/Button";
import Logo from "./Logo";
import {
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import ProjectIcon from "../Project/ProjectItem";

const MainNavbar = () => {
  const [noProject, setNoProject] = useState(false);
  return (
    <nav className="flex h-full flex-col justify-between p-2">
      <Logo />
      <div className=" mb-4 mt-6 h-full w-full overflow-scroll border-t border-gray-400 pt-3">
        {noProject ? (
          <p className="text-center text-gray-500">NO PROJECT</p>
        ) : (
          <>
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
          </>
        )}
      </div>
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
