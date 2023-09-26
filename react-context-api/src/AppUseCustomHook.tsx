import { usePokemonContext, usePokemonSource, PokemonContext} from './store';
import './App.css';


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
