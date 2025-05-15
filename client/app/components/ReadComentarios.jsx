import { Badge } from "@/components/ui/badge"
import { comentarios } from "@/app/data/comentarios";

export const ReadComentarios = () => {
    return comentarios.map((item) => (
            <article key={item.id} className="border-2 border-zinc-300 rounded-md p-5">
                <p>
                    {item.content}
                </p>

                <ul className="flex gap-2">
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


export const CustomBadge = ({category}) => {
    return <Badge>{category}</Badge>
}
