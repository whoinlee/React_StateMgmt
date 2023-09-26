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

// const PokemonContext = createContext<ReturnType<typeof usePokemonSource> | undefined>({ pokemon: [] as Pokemon[] });
// const PokemonContext = createContext<ReturnType<typeof usePokemonSource> | undefined>(undefined); //-- causes issue in PokemonList
const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>({} as unknown as ReturnType<typeof usePokemonSource>); 
function usePokemonContext() 
{
  return useContext(PokemonContext);
}
const PokemonList = () => {
  const { pokemon } = usePokemonContext();

  return (
    <div>
      {pokemon.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  )
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
