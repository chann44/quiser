import PrimaryButton from "../../ui/PrimaryButton";

const CreateNewProjectButton = () => {
  return (
    <div className="flex h-full w-full items-center justify-center border">
      <PrimaryButton className="bg-green-500 px-6 py-3 text-white">
        Create A New Project
      </PrimaryButton>
    </div>
  );
};
export default CreateNewProjectButton;
