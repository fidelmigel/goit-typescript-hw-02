import s from "../SearchBar/SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Cannot be empty");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={s.div}>
      <Toaster />
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          placeholder="Search images and photos"
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
