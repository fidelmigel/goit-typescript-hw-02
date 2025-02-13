import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { ErrorMessage } from "formik";
import axios from "axios";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ApiUnsplash, Image } from "./App.types";

const API_KEY = "26UblW7-V9V9B2GJlnb3TrTwBNkaFK59zezdMLJdEAI";
const BASE_URL = "https://api.unsplash.com";
function App() {
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<ApiUnsplash>(
          `${BASE_URL}/search/photos?client_id=${API_KEY}`,
          {
            params: {
              query,
              page,
              per_page: 16,
              client_id: API_KEY,
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
        setError("Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onHandleSubmit = (value: string) => {
    if (value === query) return;
    setQuery(value);
    setPhotos([]);
    setPage(1);
    setIsEmpty(false);
    setIsVisible(false);
    setError(null);
  };

  const openModal = (photo: Image) => {
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
      {!photos.length && !isEmpty && <p> Let`s begit saerch</p>}
      {loading && <Loader />}
      {error && <div className="error-message">{error}</div>}
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
