import { usePokemonContext, PokemonProvider} from './store';
import './App.css';


const PokemonList = () => {
  const { pokemon } = usePokemonContext();

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemon.map((p) => (
        <li
          key={p.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  )
}

const AppUseCustomHook = () => {
  return (
      <PokemonProvider>
        <div className="mx-auto max-w-3xl">
          <PokemonList />
        </div>
      </PokemonProvider>
  )
}

export default AppUseCustomHook
