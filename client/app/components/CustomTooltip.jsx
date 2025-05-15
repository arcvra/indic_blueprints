import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CustomButton } from "@/app/components/CustomButton";

export function CustomTooltip() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <CustomButton />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Copiar al portapapeles</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
