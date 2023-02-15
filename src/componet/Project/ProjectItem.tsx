import { AiOutlineAccountBook, AiOutlineMore } from "react-icons/ai";

const ProjectIcon = () => {
  return (
    <div className="flex cursor-pointer items-center justify-between  border-b border-r-gray-400 p-5 hover:bg-slate-100">
      <div className="flex items-center space-x-4">
        <AiOutlineAccountBook className="text-2xl" />
        <p className="text-xl">Quizer</p>
        <p className="flex h-7 w-7  items-center justify-center rounded-full bg-gray-400 text-sm ">
          0
        </p>
      </div>
      <div>
        <AiOutlineMore className="text-xl" />
      </div>
    </div>
  );
};

export default ProjectIcon;
