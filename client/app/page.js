import templates from "@/app/data/templates.json";
import { CustomTabs } from "@/components/CustomTabs";

export default function Home() {

  return (
    <main className="main-layout grid px-20 gap-y-20 bg-black-900 py-10">

      <CustomTabs fileType={"templates"} file={templates} />
    </main>
  );
}
