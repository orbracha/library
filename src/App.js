import { useEffect, useState } from "react";
import "./App.scss";
import bookLogo from "./assets/openlibrary-logo.svg";
import { parseBooksListToDisplay } from "./utils/booksFunctions";
import Book from "./components/Book";
import CustomSearch from "./components/CustomSearch";
import BookPreview from "./components/BookPreview";
import Loader from "./components/Loader";

function App() {
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [currPreviewBook, setCurrPreviewBook] = useState(null);

  const onCloseSelectedBook = () => {
    setCurrPreviewBook(null);
  };

  const onSelectedBook = (book) => {
    setCurrPreviewBook(book);
  };

  useEffect(() => {
    if (query) {
      setIsLoadingBooks(true);
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          if (data?.items?.length) {
            const bookList = parseBooksListToDisplay(data?.items);
            setBooks(bookList);
          }
        })
        .finally(() => setIsLoadingBooks(false));
    } else {
      setIsLoadingBooks(false);
      setBooks([]);
    }
  }, [query]);

  return (
    <div className="App">
      {currPreviewBook && (
        <BookPreview onClose={onCloseSelectedBook} book={currPreviewBook} />
      )}

      <div className="logo-container">
        <img className="logo" src={bookLogo} />
      </div>

      <CustomSearch onSearch={setQuery} />
      {isLoadingBooks ? (
        <Loader />
      ) : (
        <div className="books-container">
          {books?.map((book) => {
            return (
              <Book
                onSelected={onSelectedBook}
                key={book.id}
                bookDetails={book}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
