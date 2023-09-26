import { usePokemonContext, PokemonProvider} from './store';
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
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
  )
}

export default AppUseCustomHook
