import "./BookPreview.scss";
export default function BookPreview({ book, onClose }) {
  const { authors, title, publishedDate, description } = book;
  return (
    <div onClick={onClose} className="warp">
      <div
        onClick={(e) => e.stopPropagation()}
        className="book-preview-container"
      >
        <h1 className="title">{title}</h1>
        <div className="details">
          {description && (
            <div className="detail">
              <span className="alias">description:</span>
              <span>{description}</span>
            </div>
          )}
          {authors && (
            <div className="detail">
              <span className="alias">authors:</span>
              <span>{authors}</span>
            </div>
          )}
          {publishedDate && (
            <div className="detail">
              <span className="alias">published-Date:</span>
              <span>{publishedDate}</span>
            </div>
          )}
        </div>
        <div onClick={onClose} className="btn-container">
          <button className="close-btn">Close</button>
        </div>
      </div>
    </div>
  );
}
