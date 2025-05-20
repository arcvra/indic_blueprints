import templates from "@/app/data/templates.json";
import { MapItems } from "@/app/features/RenderCards";
import { filterByCategory } from "@/utils/filterByCategory";

export default function Home() {

  const items = filterByCategory({ file: templates, tag: "predeterminado" });

  return (
    <main className="main-layout grid px-20 gap-y-20 bg-black-900 py-10">
      <MapItems items={items} />
    </main>
  );
}
