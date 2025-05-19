import { Badge } from "@/components/ui/badge"
export const CustomBadge = ({ category }) => {
    return <Badge className="transition-colors hover:bg-primary/80 cursor-pointer hover:drop-shadow-sm hover:drop-shadow-neutral-950">{category}</Badge>
}