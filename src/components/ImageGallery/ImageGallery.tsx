import { Image } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProp {
  photos: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProp> = ({ photos, onClick }) => {
  return (
    <ul className={s.ul}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={s.li}>
            <ImageCard photo={photo} onClick={() => onClick(photo)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
