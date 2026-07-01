export function formatBookTitle(fileName) {
  return fileName
    .replace(/\.(pdf|epub)$/i, "")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}