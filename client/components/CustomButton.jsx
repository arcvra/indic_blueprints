import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CustomButton({onClick}) {
    return (
        <Button 
        variant="outline" 
        size="icon" 
        aria-label="Copiar texto"
        onClick={onClick}
        className="absolute top-3 right-3 cursor-pointer">
            <Copy />
        </Button>
    )
}