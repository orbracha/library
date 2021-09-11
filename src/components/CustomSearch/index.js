import "./CustomSearch.scss";
import { debounce } from "../../utils/booksFunctions";

export default function CustomSearch({ onSearch }) {
  const handleInputText = debounce((text) => {
    onSearch(text.trim());
  }, 300);

  return (
    <div className="search-container">
      <input
        placeholder="Let Me Find Your Book..."
        className="search-input"
        onChange={({ target }) => handleInputText(target.value)}
      />
    </div>
  );
}
