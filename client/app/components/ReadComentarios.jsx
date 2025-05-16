"use client"
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge"
import { comentarios } from "@/app/data/comentarios";
import { CustomTooltip } from "@/app/components/CustomTooltip";
import { useRef } from "react";
import styles from "@/app/styles/article.module.css";

const ComentarioItem = ({ item }) => {
    const textRef = useRef(null);

    const handleCopy = () => {
        if (textRef.current) {
            navigator.clipboard.writeText(textRef.current.innerText);
        }
    }

    return (
        <div className={styles.articleWrapper}>
            <div className={`${styles.articleFancy} rounded-xl`}></div>
            <article className={`${styles.article} relative w-full break-words font-thin p-5 border-1 border-zinc-700 rounded-xl bg-neutral-900`}>
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

                <ul className="flex gap-4 mt-3 mb-3">
                    <GetCategories keywords={item.keywords} />
                </ul>
            </article>

        </div>
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
