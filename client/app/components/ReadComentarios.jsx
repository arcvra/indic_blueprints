"use client"
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge"
import { comentarios } from "@/app/data/comentarios";
import { CustomTooltip } from "@/app/components/CustomTooltip";
import { useRef } from "react";

const ComentarioItem = ({ item }) => {
    const textRef = useRef(null);

    const handleCopy = () => {
        if (textRef.current) {
            navigator.clipboard.writeText(textRef.current.innerText);
        }
    }

    return (
        <article className="relative w-full break-words font-thin p-5 mb-8 border-1 border-neutral-700 rounded-xl bg-neutral-900 drop-shadow-sm drop-shadow-accent hover:drop-shadow-md hover:drop-shadow-accent transition-drop-shadow duration-300">
            <div
                ref={textRef}
                className="grid">
                <ReactMarkdown
                    components={{
                    }}
                >
                    {item.content}
                </ReactMarkdown>
            </div>

            <CustomTooltip onClick={handleCopy} />

            <ul className="flex gap-4 mt-5">
                <GetCategories keywords={item.keywords} />
            </ul>
        </article>
    )
}

export const ReadComentarios = () => {
    return comentarios.map((item) => (
        <ComentarioItem key={item.id} item={item} />
    ))

}

export const GetCategories = ({ keywords }) => {
    return keywords.map((keyword, index) => (
        <li key={index}> <CustomBadge category={keyword} /> </li>
    ));
};


export const CustomBadge = ({ category }) => {
    return <Badge className="transition-colors hover:bg-primary/80 cursor-pointer hover:drop-shadow-sm hover:drop-shadow-neutral-950">{category}</Badge>
}
