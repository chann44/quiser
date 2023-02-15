import { type NextPage } from "next";
import PrimaryButton from "../ui/PrimaryButton";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll border ">
      <div className="flex h-full w-full items-center justify-center border">
        <PrimaryButton className="bg-green-500 px-6 py-3 text-white">
          Create A New Project
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Home;
