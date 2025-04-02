import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filtre";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "O Apocalipse",
      description: "Diz a Bíblia que, no juízo final...",
      posterURL: "https://th.bing.com/th/id/R.8b99416398a7e477135a0b3cf3990645?rik=E9yb%2bF1NN5rc%2fQ&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fpictures%2f14%2f09%2f17%2f18%2f01%2f274721.jpg&ehk=CmZyl%2f0ASQP2PixjT%2b4%2f30W7I%2bHutAvZ%2fr42rFW6gDM%3d&risl=&pid=ImgRaw&r=0",
      rating: "8.8",
    },
    {
      title: "After - Para Sempre",
      description: "After - Para Sempre foi escrito...",
      posterURL: "https://br.web.img2.acsta.net/pictures/23/07/11/17/47/3488686.jpg",
      rating: "7.8",
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
  const [showAddForm, setShowAddForm] = useState(false); // État pour afficher/masquer le formulaire
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
    setMovies([...movies, newMovie]); // Ajoute le nouveau film à la liste
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" }); // Réinitialise le formulaire
    setShowAddForm(false); // Masque le formulaire après l'ajout
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value }); // Met à jour les champs du formulaire
  };

  return (
    <div className="App" style={{ padding: "20px", borderRadius: "10px", maxWidth: "800px", margin: "auto" }}>
      <Filter handleFilterTitle={handleFilterTitle} handleFilterRating={handleFilterRating} />
      <button onClick={() => setShowAddForm(!showAddForm)} style={{ marginBottom: "20px", padding: "10px", borderRadius: "5px", backgroundColor: "#007BFF", color: "#fff", border: "none" }}>
        {showAddForm ? "Annuler" : "Ajouter un film"}
      </button>

      {showAddForm && (
        <div style={{ margin: "20px 0", border: "1px solid #ccc", padding: "10px", width: "300px", borderRadius: "10px", backgroundColor: "black" }}>
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
    </div>
  );
};

export default App;