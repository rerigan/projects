import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Cinderela", release_date: "1989" },
    { id: 3, title: "Olá, tudo bem?", release_date: "2024" },
    { id: 4, title: "Esse filme é Doido", release_date: "2023" },
    { id: 5, title: "Eita porra que cheiro", release_date: "2020" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuerry);
  };
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
          ></input>
          <button type="submit" className="searchbutton">
            Search
          </button>
        </form>

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
