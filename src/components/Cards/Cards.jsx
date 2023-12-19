/* eslint-disable react/prop-types */
import CardPokemon from "../Card/Card";
// import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ pokemonList }) => {
  const getPokemonIdFromUrl = (url) => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : null;
  };

  return (
    <>
      <div className="container">
        {pokemonList.map((pokemon) => (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}
            urlImages={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonIdFromUrl(
              pokemon.url
            )}.png`}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
