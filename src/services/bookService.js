import { formatBookTitle } from "../utils/formatBookTitle";
import { extractEpubMetadata } from "./epubServices";
export async function createBook(file) {
  const extension = file.name.split(".").pop().toLowerCase();

  // eslint-disable-next-line no-useless-assignment
  let type = "";

  if (extension === "pdf") {
    type = "pdf";
  } else if (extension === "epub") {
    type = "epub";
  } else {
    throw new Error("Unsupported file type");
  }

  let title = formatBookTitle(file.name);

  let author = "Unknown Author";

  let cover = null;

  if (type === "epub") {
    const metadata = await extractEpubMetadata(file);

    title = metadata.title || title;

    author = metadata.author;

    cover = metadata.cover;
  }

  return {
    id: crypto.randomUUID(),

    title,

    author,

    cover,

    type,

    file,

    status: "want-to-read",

    favourite: false,

    progress: 0,

    notes: [],

    highlights: [],
  };
}