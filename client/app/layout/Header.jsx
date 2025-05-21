import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { CustomInput } from "../../components/CustomInput";
import { Separator } from "@/components/ui/separator"


export default function Header() {
    return (
        <header className="header-layout bg-black-900 grid grid-cols-[1fr_minmax(180px,22rem)_auto] gap-10 px-20 py-5 items-center">
            <h1 className="font-bold text-2xl">Plantillas de texto</h1>
            <div className="flex justify-center w-full">

                <ul className="flex gap-3 justify-around w-full">
                    <Separator orientation="vertical" />
                    <li>
                        <Link
                            href="/"
                            prefetch={true}
                        >Correo</Link>
                    </li>
                    <Separator orientation="vertical" />
                    <li>
                        <Link
                            href="/comentaris"
                            prefetch={true}
                        >Comentarios tipo</Link>
                    </li>
                    <Separator orientation="vertical" />
                    <li>
                        <a className="items-baseline" target="_blank" href="https://github.com/arcvra">
                            <FaGithub className="h-5 w-full" />
                        </a>
                    </li>
                    <li>
                        <a className="items-baseline" target="_blank" href="https://www.notion.so/PANELLS-Plantillas-1e7e9aaef00a8037837cdbbeac582cdb?pvs=4">
                            <RiNotionFill className="h-5 w-full" />
                        </a>
                    </li>
                    <Separator orientation="vertical" />
                </ul>
            </div>
            <div>
                <CustomInput />
            </div>
        </header>
    )
}