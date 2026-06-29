import { createContext, useState , useEffect } from "react";
import { books as initialBooks } from "../data/books";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState(() => {
  const savedBooks = localStorage.getItem("books");

  if (savedBooks) {
    return JSON.parse(savedBooks);
  }

  return initialBooks;
});
useEffect(() => {
  localStorage.setItem("books", JSON.stringify(books));
}, [books]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;