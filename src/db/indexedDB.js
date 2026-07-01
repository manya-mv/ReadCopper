import { openDB } from "idb";

export const dbPromise = openDB("ReadCopperDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("books")) {
      db.createObjectStore("books");
    }
  },
});