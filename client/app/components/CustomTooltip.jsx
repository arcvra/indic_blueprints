import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CustomButton } from "@/app/components/CustomButton";

export function CustomTooltip({onClick}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <CustomButton onClick={onClick} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Copiar al portapapeles</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
