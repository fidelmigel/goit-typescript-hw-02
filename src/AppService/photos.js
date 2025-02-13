import axios from "axios";

const API_KEY = "26UblW7-V9V9B2GJlnb3TrTwBNkaFK59zezdMLJdEAI";
const API_ID = "694712";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `${API_ID} ${API_KEY}`;
axios.defaults.params = {
  X_Per_Page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
