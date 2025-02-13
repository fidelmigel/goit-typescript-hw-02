import { Image } from "../App/App.types";
import s from "./ImageModal.module.css";
import Modal from "react-modal";

interface ImageModalProp {
  photo: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProp> = ({
  isOpen,
  onRequestClose,
  photo,
}) => {
  if (!photo) return null;
  return (
    <div className={s.div}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <img src={photo.urls.regular} alt={photo.alt_description || "Image"} />
        <button className={s.btn} onClick={onRequestClose}>
          X
        </button>
        <p className={s.caption}>
          {photo.description ||
            photo.alt_description ||
            "No description available"}
        </p>
      </Modal>
    </div>
  );
};

export default ImageModal;
