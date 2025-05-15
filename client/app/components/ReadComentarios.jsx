import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge"
import { comentarios } from "@/app/data/comentarios";

export const ReadComentarios = () => {
    return comentarios.map((item) => (
        <article key={item.id} className="border-1 border-zinc-300 rounded-md p-5 font-thin flex flex-col flex-wrap max-w-7xl">
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <i style={{ textWrap: 'wrap', fontStyle: "normal" }} {...props} />
                }}
            >
                {item.content}
            </ReactMarkdown>

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
    return <Badge>{category}</Badge>
}
