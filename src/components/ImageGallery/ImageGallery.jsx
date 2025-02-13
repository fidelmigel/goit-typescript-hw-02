import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onClick }) => {
  return (
    <ul className={s.ul}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={s.li}>
            <ImageCard photo={photo} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
