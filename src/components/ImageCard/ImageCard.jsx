import s from "./ImageCard.module.css";

const ImageCard = ({ photo, onClick }) => {
  const { urls, alt_description } = photo;
  return (
    <div className={s.wrap}>
      <img
        className={s.img}
        src={urls.small}
        alt={alt_description}
        onClick={() => onClick(photo)}
      />
    </div>
  );
};

export default ImageCard;
