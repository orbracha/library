import "./Book.scss";
import emptyImgBook from "../../assets/empy-book.png";
export default function Book({ bookDetails, onSelected }) {
  const { title, img } = bookDetails;
  return (
    <div onClick={() => onSelected(bookDetails)} className="book-container">
      <h1 className="book-title">{title}</h1>
      <img alt="book-img" className="book-img" src={img || emptyImgBook} />
    </div>
  );
}
