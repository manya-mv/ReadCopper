import { createContext, useEffect, useState } from "react";
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

  // ⭐ Toggle Favourite
  function toggleFavorite(id) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id
          ? { ...book, favourite: !book.favourite }
          : book
      )
    );
  }

  // 📖 Change Reading Status
  function changeStatus(id, status) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id
          ? { ...book, status }
          : book
      )
    );
  }

  // 🗑 Delete Book
  function deleteBook(id) {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== id)
    );
  }

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        toggleFavorite,
        changeStatus,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;