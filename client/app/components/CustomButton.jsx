import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CustomButton() {
    return (
        <Button 
        variant="outline" 
        size="icon" 
        aria-label="Copiar texto"
        className="absolute top-3 right-3">
            <Copy />
        </Button>
    )
}