import { MapItems } from "@/app/features/RenderCards"
import { getTabsByFile } from "@/utils/getTabsByFile"
import { filterByCategory } from "@/utils/filterByCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 *
 * @param {"templates" | "comments"} fileType - Tipo de archivo para determinar el layout de tabs.
 * @param {Array<Object>} file - Datos a renderizar dentro de las tabs
 */

export function CustomTabs({ fileType, file }) {
    return (
        <Tabs defaultValue="predeterminado">
            <TabsList className="border-neutral-900 border-2 gap-5 px-2 h-15">
                <RenderTabsByFile filename={fileType} />
            </TabsList>

            <RenderTabsContentByFile filename={fileType} data={file} />

        </Tabs>
    )
}

/**
 * 
 * @param {string} filename - String "templates" o "comments"; detecta qué tabs renderizar 
 * @returns {JSX.Element[]} Un array de componentes TabsTrigger
 */
const RenderTabsByFile = ({ filename }) => {
    const tags = getTabsByFile(filename);

    return tags.map(({ label, value }, index) => (
        <TabsTrigger
            key={index}
            value={value}
            className="h-10 py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300"
        >
            {label}
        </TabsTrigger>
    ))
}


/**
 * 
 * @param {string} filename - String "templates" o "comments"; detecta qué secciones renderizar 
 * @param {Array<Object>} data - Array de objetos; lee el contenido correspondiente al archivo
 * @returns {JSX.Element[]} - Un array de componentes TabsContent
 */
const RenderTabsContentByFile = ({ filename, data }) => {
    const tabs = getTabsByFile(filename);

    return tabs.map(({ value }, index) => (
        <TabsContent key={index} value={value}>
            <MapItems
                items={
                    value === "" ? data : filterByCategory({ file: data, tag: value }) // handles empty value as an "all" category
                }
            />
        </TabsContent>
    ))
}