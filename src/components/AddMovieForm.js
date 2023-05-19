import React, { useState } from "react";
import axios from "axios";

const AddMovieForm = ({ setMovies }) => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/movies", movie)
      .then((res) => {
        setMovies((prevMovies) => [...prevMovies, res.data]);
        setMovie({
          title: "",
          director: "",
          genre: "",
          metascore: 0,
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { title, director, genre, metascore, description } = movie;

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Director</label>
          <input
            type="text"
            name="director"
            value={director}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Metascore</label>
          <input
            type="number"
            name="metascore"
            value={metascore}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
