export default function Header() {
    return (
        <header className="header-layout bg-zinc-900 grid grid-cols-2 px-20 py-5">
            <h1>Logo placeholder</h1>
            <div className="justify-self-end-safe">
                <ul className="flex gap-4">
                    <li><a href="https://github.com/arcvra">Github</a></li>
                    <li><a href="https://www.notion.so/PANELLS-Plantillas-1e7e9aaef00a8037837cdbbeac582cdb?pvs=4">Notion</a></li>
                </ul>
            </div>
        </header>
    )
}