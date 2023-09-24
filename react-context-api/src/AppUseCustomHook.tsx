import { useState, useEffect } from 'react';
import './App.css';

interface Pokemon {
  "id": number;
  "name": string;
  "type": string[];
  "hp": number;
  "attack": number;
  "defense": number;
  "special_attack": number;
  "special_defense": number;
  "speed": number;
}

function usePokemon ():{ pokemon: Pokemon[]} 
{
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('/pokemon.json')
    .then(response => response.json())
    .then(data => setPokemon(data))
    
  }, []);

  return { pokemon };
}

const PokemonList = ({ pokemon }:{ pokemon: Pokemon[] }) => {
  return (
    <div>
      {pokemon.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  )
}

const AppUseCustomHook = () => {
  const { pokemon } = usePokemon();

  return (
    <>
      {/* <div>
        {JSON.stringify(pokemon)}
      </div> */}
      <PokemonList pokemon={pokemon} />
    </>
  )
}

export default AppUseCustomHook
