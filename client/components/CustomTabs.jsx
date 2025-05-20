import { MapItems } from "@/app/features/RenderCards"
import { filterByCategory } from "@/utils/filterByCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CustomTabs({ file }) { // TODO: add categories and style
    return (
        <Tabs defaultValue="predeterminado">
            <TabsList className="border-zinc-200 border-2 gap-5 px-2 h-10">
                <TabsTrigger value="predeterminado" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Predeterminado</TabsTrigger>
                <TabsTrigger value="firma" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Firma</TabsTrigger>
                <TabsTrigger value="completo" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Completo</TabsTrigger>
                <TabsTrigger value="disculpas" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Disculpas</TabsTrigger>
                <TabsTrigger value="corrección" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Corrección</TabsTrigger>
                <TabsTrigger value="formato" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Formato</TabsTrigger>
                <TabsTrigger value="" className="py-2 border-1 border-neutral-900 shadow-neutral-900 shadow cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-300">Todos</TabsTrigger>
            </TabsList>

            <TabsContent value="predeterminado">
                <MapItems items={filterByCategory({ file: file, tag: "predeterminado" })} />
            </TabsContent>

            <TabsContent value="firma">
                <MapItems items={filterByCategory({ file: file, tag: "firma" })} />
            </TabsContent>

            <TabsContent value="completo">
                <MapItems items={filterByCategory({ file: file, tag: "completo" })} />
            </TabsContent>

            <TabsContent value="disculpas">
                <MapItems items={filterByCategory({ file: file, tag: "disculpas" })} />
            </TabsContent>

            <TabsContent value="corrección">
                <MapItems items={filterByCategory({ file: file, tag: "corrección" })} />
            </TabsContent>

            <TabsContent value="formato">
                <MapItems items={filterByCategory({ file: file, tag: "formato" })} />
            </TabsContent>

            <TabsContent value="">
                <MapItems items={file} />
            </TabsContent>

        </Tabs>
    )
}