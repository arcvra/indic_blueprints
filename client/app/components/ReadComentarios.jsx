import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge"
import { comentarios } from "@/app/data/comentarios";

export const ReadComentarios = () => {
    return comentarios.map((item) => (
        <article key={item.id} className=" w-full break-words font-thin p-5 mb-8 border-1 border-zinc-300 rounded-md">
            <div className="grid">
                <ReactMarkdown
                    components={{
                    }}
                >
                    {item.content}
                </ReactMarkdown>
            </div>
            <ul className="flex gap-4 mt-5">
                <GetCategories keywords={item.keywords} />
            </ul>
        </article>
    ))
}

export const GetCategories = ({ keywords }) => {
    return keywords.map((keyword, index) => (
        <li key={index}> <CustomBadge category={keyword} /> </li>
    ));
};


export const CustomBadge = ({ category }) => {
    return <Badge className="transition-colors hover:bg-primary/80 cursor-pointer">{category}</Badge>
}
