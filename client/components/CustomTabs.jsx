import { MapItems } from "@/app/features/RenderCards"
import { filterByCategory } from "@/utils/filterByCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CustomTabs({ file }) { // TODO: add categories and style
    return (
        <Tabs defaultValue="account">
            <TabsList>
                <TabsTrigger value="completo">Completo</TabsTrigger>
                <TabsTrigger value="firma">Firma</TabsTrigger>
            </TabsList>
            <TabsContent value="completo">
                <MapItems items={filterByCategory({ file: file, tag: "completo" })} />
            </TabsContent>
            <TabsContent value="firma">
                <MapItems items={filterByCategory({ file: file, tag: "firma" })} />
            </TabsContent>
        </Tabs>

    )
}