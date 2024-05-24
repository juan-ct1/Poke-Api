import {Boton} from "../componentes/Boton";
import {Card} from "../componentes/Card";
import "../sass/App.scss"
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useEffect, useState } from "react";

const App = ()=> {

  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvolucion, setPokemonEvolucion] = useState([]);

  useEffect(()=>{
    getEvolutions(pokemonId);
    console.log('uso efectivo')
  },[pokemonId] )

  async function getEvolutions(id){
     const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    )
    const data = await response.json();

    let PokemonArrayEvol = [];
     let PokemomLv1 = data.chain.species.name;
    let PokemonLvImg = await getPokemonImg(PokemomLv1);

    PokemonArrayEvol.push([PokemomLv1,PokemonLvImg]);

    if(data.chain.evolves_to.length !== 0){
      let PokemonLv2 = data.chain.evolves_to[0].species.name;
      let PokemonLv2Img = await getPokemonImg(PokemonLv2);
      PokemonArrayEvol.push([PokemonLv2,PokemonLv2Img]);

      if(data.chain.evolves_to[0].evolves_to.length !== 0){
        let PokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let PokemonLv3Img = await getPokemonImg(PokemonLv3);
        PokemonArrayEvol.push([PokemonLv3,PokemonLv3Img]);
      }
    }
    setPokemonEvolucion(PokemonArrayEvol);

  }

  async function getPokemonImg(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json();
    return data.sprites.other['official-artwork'].front_default;
  };

  function prevClick(){
    (pokemonId === 1)?
    setPokemonId(1):
    setPokemonId(pokemonId -1)
  }

  function nextClick(){
    setPokemonId(pokemonId + 1)
  }
    return(
      <div className="app">

      <div className={`card-content card${pokemonEvolucion.length}`}>
        {pokemonEvolucion.map(pokemon => 
        < Card
        key = {pokemon[0]}
        name = {pokemon[0]}
        img = {pokemon[1]}
        />)}
      </div>

      <div className="btn-content">
        <Boton 
        icon={<TiArrowLeftOutline />}
        handleClick={prevClick}
          />
        <Boton icon={<TiArrowRightOutline />}
        handleClick={nextClick}
        />
      </div>
      </div>
    )
}

export {App};