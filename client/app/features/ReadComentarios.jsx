"use client"
import ReactMarkdown from "react-markdown";
import templates from "@/app/data/templates.json"
import { CustomTooltip } from "@/components/CustomTooltip";
import { CustomBadge } from "@/components/CustomBadge";
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
    return templates.map((item) => (
        <ComentarioItem key={item.id} item={item} />
    ))

}

export const GetCategories = ({ keywords }) => {
    return keywords.map((keyword, index) => (
        <li key={index}> <CustomBadge category={keyword} /> </li>
    ));
};