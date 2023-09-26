import { useState, useEffect, createContext, useContext } from 'react';
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

function usePokemonSource ():{ pokemon: Pokemon[]} 
{
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('/pokemon.json')
    .then(response => response.json())
    .then(data => setPokemon(data))
  }, []);

  return { pokemon };
}

function usePokemonContext() 
{
  return useContext(PokemonContext);
}

const PokemonContext = createContext({ pokemon: [] as Pokemon[] });

const PokemonList = () => {
  const { pokemon } = usePokemonContext();

  return (
    <div>
      {pokemon.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  )
}

const AppUseCustomHook = () => {
  return (
    <>
      <PokemonContext.Provider value={usePokemonSource()}>
        <PokemonList />
      </PokemonContext.Provider>
    </>
  )
}

export default AppUseCustomHook
