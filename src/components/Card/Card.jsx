/* eslint-disable react/prop-types */
// import "./Card.css";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardPokemon = ({ pokemon, urlImages }) => {
  const convertirPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Card sx={{ maxWidth: 350 }} className="container_card_pokemon">
        <CardMedia
          sx={{ height: 150 }}
          image={urlImages}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {convertirPrimeraLetra(pokemon.name)}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default CardPokemon;
