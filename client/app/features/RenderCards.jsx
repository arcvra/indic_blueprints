"use client"
import ReactMarkdown from "react-markdown";
import { CustomTooltip } from "@/components/CustomTooltip";
import { CustomBadge } from "@/components/CustomBadge";
import { useRef } from "react";
import styles from "@/app/styles/article.module.css";

const CreateCards = ({ item }) => {
    const textRef = useRef(null);

    const handleCopy = () => {
        if (textRef.current) {
            navigator.clipboard.writeText(textRef.current.innerText);
        }
    }

    return (
        <div className={`${styles.articleWrapper} m-10`}>
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
                    <RenderCategories keywords={item.keywords} />
                </ul>
            </article>

        </div>
    )
}

export const MapItems = ({items}) => {
    return items.map((item) => (
        <CreateCards key={item.id} item={item} />
    ))
}

export const RenderCategories = ({ keywords }) => {
    return keywords.map((keyword, index) => (
        <li key={index}> <CustomBadge category={keyword} /> </li>
    ));
};