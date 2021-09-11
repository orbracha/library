export const parseBooksListToDisplay = (books) => {
  return books.map((book) => {
    const { title, imageLinks, authors, publishedDate, description } =
      book.volumeInfo;
    return {
      id: book.id,
      title,
      img: imageLinks?.thumbnail,
      authors: authors?.join(" ,"),
      publishedDate,
      description,
    };
  });
};

export const debounce = (func, wait, immediate) => {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
