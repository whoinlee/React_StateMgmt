import { useReducer } from 'react'

import './App.css'

function App() {
  const [state, dispatch] = useReducer(
  //-- reducer function
  (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return {...state, name: action.payload};
      case "ADD_NAME":
        return {...state, names: [...state.names, state.name], name: ''};
      default:
        return state;
    }
  }, 
  //-- initial state
  {
    names: [],
    name: ""
  });

  const onInputChange = (e) => {
    dispatch ({type: "SET_NAME", payload: e.target.value})
  }

  const onButtonClick = () => {
    dispatch ({type: "ADD_NAME"})
  }

  return (
    <>
    <div>
      {state.names.map((name, index) => 
        <div key={name + "_" + index}>{name}</div>
      )}
    </div>
      <input 
        type="text"
        value={state.name}
        onChange={onInputChange} />
      <button onClick={onButtonClick}>Add Name</button>
    </>
  )
}

export default App
