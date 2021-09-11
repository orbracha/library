import "./Loader.scss";
import loadingImg from "../../assets/loading.gif";

export default function Loader() {
  return (
    <div className="loading-container">
      <img alt="loading" src={loadingImg} />
    </div>
  );
}
