import s from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button type="button" onClick={onClick} className={s.btn}>
    Load more...
  </button>
);

export default LoadMoreBtn;
