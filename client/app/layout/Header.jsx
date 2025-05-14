import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

export default function Header() {
    return (
        <header className="header-layout bg-black-900 grid grid-cols-2 px-20 py-5 items-center">
            <h1>Logo placeholder</h1>
            <div className="justify-self-end-safe">
                <ul className="flex gap-4">
                    <li>
                        <a className="items-baseline" target="_blank" href="https://github.com/arcvra">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a className="items-baseline" target="_blank" href="https://www.notion.so/PANELLS-Plantillas-1e7e9aaef00a8037837cdbbeac582cdb?pvs=4">
                            <RiNotionFill />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}