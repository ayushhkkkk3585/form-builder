import { UserButton } from "@clerk/nextjs";
import { NewFormButton } from "./_components/new-form";
import { FormList } from "./_components/form-list";

const Page = () => {
  return (
    <div className="flex">
      <div className="flex flex-col md:flex-row align-top w-full p-6 space-y-6 md:space-y-0 md:space-x-6">
        <FormList />
      </div>
      <div className="flex "></div>
    </div>
  );
};
export default Page;
