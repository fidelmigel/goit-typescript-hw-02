import "../App/App.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { ErrorMessage } from "formik";
import axios from "axios";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const API_KEY = "26UblW7-V9V9B2GJlnb3TrTwBNkaFK59zezdMLJdEAI";
const BASE_URL = "https://api.unsplash.com";
function App() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/search/photos?client_id=${API_KEY}`,
          {
            params: {
              query,
              page,
              per_page: 16,
            },
          }
        );
        if (response.data.results.length === 0) {
          setIsEmpty(true);
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
          setIsVisible(response.data.results.length === 16);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onHandleSubmit = (value) => {
    if (value === query) return;
    setQuery(value);
    setPhotos([]);
    setPage(1);
    setIsEmpty(false);
    setIsVisible(false);
    setError(null);
  };

  const openModal = (photo) => {
    setModalImage(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={openModal} />
      )}
      {!photos.length && !isEmpty && (
        <p> Let's find what you're looking for.</p>
      )}
      {loading && <Loader />}
      {error && (
        <ErrorMessage
          name="fetchError"
          component="div"
          message="Something went wrong"
        />
      )}
      {isEmpty && <p>Sorry. There are not images ...</p>}
      {isVisible && !loading && (
        <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
      )}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          photo={modalImage}
        />
      )}
    </>
  );
}

export default App;
