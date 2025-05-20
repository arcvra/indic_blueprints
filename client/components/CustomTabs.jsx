import { MapItems } from "@/app/features/RenderCards"
import { filterByCategory } from "@/utils/filterByCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CustomTabs({ file }) { // TODO: add categories and style
    return (
        <Tabs defaultValue="predeterminado">
            <TabsList>
                <TabsTrigger value="predeterminado" >Predeterminado</TabsTrigger>
                <TabsTrigger value="firma">Firma</TabsTrigger>
                <TabsTrigger value="completo" >Completo</TabsTrigger>
                <TabsTrigger value="disculpas">Disculpas</TabsTrigger>
                <TabsTrigger value="corrección">Corrección</TabsTrigger>
                <TabsTrigger value="formato">Formato</TabsTrigger>
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
        </Tabs>

    )
}