import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filtre";
import MovieDetails from "./MovieDetails";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "O Apocalipse",
      description: "Diz a Bíblia que, no juízo final...",
      posterURL: "https://th.bing.com/th/id/R.8b99416398a7e477135a0b3cf3990645?rik=E9yb%2bF1NN5rc%2fQ&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fpictures%2f14%2f09%2f17%2f18%2f01%2f274721.jpg&ehk=CmZyl%2f0ASQP2PixjT%2b4%2f30W7I%2bHutAvZ%2fr42rFW6gDM%3d&risl=&pid=ImgRaw&r=0",
      rating: "8.8",
      detailedDescription: "Un film captivant sur la fin des temps.",
      trailerURL: "https://www.youtube.com/embed/example1",
    },
    {
      title: "After - Para Sempre",
      description: "After - Para Sempre foi escrito...",
      posterURL: "https://br.web.img2.acsta.net/pictures/23/07/11/17/47/3488686.jpg",
      rating: "7.8",
      detailedDescription: "Une histoire d'amour intense et dramatique.",
      trailerURL: "https://www.youtube.com/embed/example2",
    },
    {
      title: "Braven (2017)",
      description: "Joe Braven (Jason Momoa)...",
      posterURL: "https://filmspot.com.pt/images/filmes/posters/big/459910_pt.jpg",
      rating: "7.8",
    },
    {
      title: "Pesadelo",
      description: "Ainda vivendo o luto pela perda...",
      posterURL: "https://br.web.img3.acsta.net/pictures/19/04/22/18/16/4263682.jpg",
      rating: "7.8",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleFilterTitle = (title) => {
    if (title.trim() === "") {
      setFilteredMovies([]);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const handleFilterRating = (rating) => {
    const filtered = movies.filter((movie) => movie.rating >= rating);
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    setShowAddForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  return (
    <Router>
      <div className="App" style={{ padding: "20px", borderRadius: "10px", maxWidth: "800px", margin: "auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter handleFilterTitle={handleFilterTitle} handleFilterRating={handleFilterRating} />
                <button onClick={() => setShowAddForm(!showAddForm)} className="add-movie-button">
                  {showAddForm ? "Annuler" : "Ajouter un film"}
                </button>
                {showAddForm && (
                  <div className="add-movie-form">
                    <input
                      type="text"
                      name="title"
                      placeholder="Titre"
                      value={newMovie.title}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={newMovie.description}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="posterURL"
                      placeholder="URL du poster"
                      value={newMovie.posterURL}
                      onChange={handleInputChange}
                    />
                    <input
                      type="number"
                      name="rating"
                      placeholder="Note"
                      value={newMovie.rating}
                      onChange={handleInputChange}
                    />
                    <button onClick={handleAddMovie}>Enregistrer</button>
                  </div>
                )}
                <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;