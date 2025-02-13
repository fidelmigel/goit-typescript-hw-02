import s from "./ImageCard.module.css";

interface ImageCardProp {
  photo: {
    urls: {
      small: string;
    };
    alt_description: string | null;
  };
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProp> = ({ photo, onClick }) => {
  const { urls, alt_description } = photo;
  return (
    <div className={s.wrap} onClick={onClick}>
      <img
        className={s.img}
        src={urls.small}
        alt={alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
