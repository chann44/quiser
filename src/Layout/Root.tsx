import type { ReactNode } from "react";
import MainNavbar from "../componet/Navbar/MainNavbar";

interface Props {
  children: ReactNode;
}

const Root = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full">
      <div className="max-w-xs border shadow-lg  md:w-full ">
        <MainNavbar />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Root;
