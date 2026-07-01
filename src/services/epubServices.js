import ePub from "epubjs";

export async function extractEpubMetadata(file) {
  const arrayBuffer = await file.arrayBuffer();

  const book = ePub(arrayBuffer);

  await book.ready;

  const metadata = await book.loaded.metadata;

  let cover = null;

  try {
    const coverUrl = await book.coverUrl();

    cover = coverUrl;
  } catch  {
    console.log("No cover found.");
  }

  return {
    title: metadata.title || null,
    author: metadata.creator || "Unknown Author",
    cover,
  };
}