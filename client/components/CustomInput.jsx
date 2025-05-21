import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TfiSearch } from "react-icons/tfi"

export function CustomInput() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Palabra clave" disabled />
            <Button type="submit" disabled >
                <TfiSearch />
            </Button>
        </div>
    )
}
