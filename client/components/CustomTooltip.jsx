import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CustomTooltip({ onClick }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>

                    <Button
                        variant="outline"
                        size="icon"
                        aria-label="Copiar texto"
                        onClick={onClick}
                        className="absolute top-3 right-3 cursor-pointer active:scale-90"
                    >
                        <Copy />
                    </Button>

                </TooltipTrigger>
                <TooltipContent>
                    <p>Copiar al portapapeles</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
