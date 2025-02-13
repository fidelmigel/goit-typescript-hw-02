import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProp {
  onClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProp> = ({ onClick }) => (
  <button type="button" onClick={onClick} className={s.btn}>
    Load more...
  </button>
);

export default LoadMoreBtn;
