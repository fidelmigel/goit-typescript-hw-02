import s from "../ImageModal/ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, photo }) => {
  if (!photo) return null;
  return (
    <div className={s.div}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <img src={photo.urls.regular} alt={photo.alt_description} />
        <button className={s.btn} onClick={onRequestClose}>
          X
        </button>
        <p className={s.caption}>
          {photo.description || photo.alt_description}
        </p>
      </Modal>
    </div>
  );
};

export default ImageModal;
