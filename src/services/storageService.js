import { dbPromise } from "../db/indexedDB";

export async function saveBookFile(file) {
  const db = await dbPromise;

  const fileId = crypto.randomUUID();

  await db.put("books", file, fileId);

  return fileId;
}

export async function getBookFile(fileId) {
  const db = await dbPromise;

  return await db.get("books", fileId);
}

export async function deleteBookFile(fileId) {
  const db = await dbPromise;

  await db.delete("books", fileId);
}

export async function getAllBookFiles() {
  const db = await dbPromise;

  return await db.getAll("books");
}