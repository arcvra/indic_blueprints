export const getTabsByFile = (filename) => {
    if (filename === "templates") {
        return [
            { label: "Predeterminado", value: "predeterminado" },
            { label: "Firma", value: "firma" },
            { label: "Disculpas", value: "disculpas" },
            { label: "Corrección", value: "corrección" },
            { label: "Servicios", value: "serveis" },
            { label: "Formato", value: "formato" },
            { label: "Completo", value: "completo" },
            { label: "Todos", value: "" }, // Todos con value vacío
        ];
    } else if (filename === "comments") {
        return [
            { label: "Predeterminado", value: "predeterminado" },
            { label: "Retirada", value: "retirada" },
            { label: "Proyector", value: "projector" },
            { label: "Instalación", value: "instal·lació" },
            { label: "Adecuación", value: "adequació" },
            { label: "Nomenclatura", value: "nomenclatura" },
            { label: "SACE", value: "SACE" },
            { label: "Todos", value: "" }
        ]
    }

    return [];
}