import { useState, useEffect, createContext, useContext } from 'react';
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

// eslint-disable-next-line react-refresh/only-export-components
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

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>({} as unknown as ReturnType<typeof usePokemonSource>); 

// eslint-disable-next-line react-refresh/only-export-components
export function usePokemonContext() 
{
    return useContext(PokemonContext);
}

export function PokemonProvider({children}:{children: React.ReactNode}) 
{
    return (
        <PokemonContext.Provider value={usePokemonSource()}>
            {children}
        </PokemonContext.Provider>
    )
}