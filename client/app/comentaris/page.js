import comments from "@/app/data/comments.json";
import { CustomTabs } from "@/components/CustomTabs";
export default function Comentaris() {
    return (
        <main className="main-layout grid px-20 gap-y-20 bg-black-900 py-10">
            <CustomTabs fileType={"comments"} file={comments} />
        </main>
    );
}