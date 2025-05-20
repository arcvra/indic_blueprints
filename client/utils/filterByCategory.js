/**
 * Filtra los objetos de un array que contengan un keyword específico.
 * @param {string} tag - Keyword a buscar
 * @param {Array<Object>} file - Array de objetos con una propiedad 'keywords' tipo array
 * @returns {Array<Object>} - Objetos que incluyen el tag indicado.
 */
export function filterByCategory({ file, tag }) {
    return file.filter((item) => item.keywords.includes(tag));
}