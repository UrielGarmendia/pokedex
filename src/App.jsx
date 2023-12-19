import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [paginationLimit, setPaginationLimit] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${paginationLimit}&limit=20`
        );
        const data = await response.json();
        setPokemonList(data.results);
        setTotalPages(Math.ceil(data.count / 20));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [paginationLimit]);

  const handleNextPage = () => {
    setPaginationLimit((prevLimit) => prevLimit + 20);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPaginationLimit((prevLimit) => Math.max(prevLimit - 20, 0));
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  console.log("pokemonList", pokemonList);

  return (
    <div>
      <h1>Pokedex</h1>
      <Cards pokemonList={pokemonList} />
      <div>
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>Previous Page</button>
        )}
        <span>
          Page {currentPage} of {totalPages}{" "}
        </span>
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next Page</button>
        )}
      </div>
    </div>
  );
}

export default App;
