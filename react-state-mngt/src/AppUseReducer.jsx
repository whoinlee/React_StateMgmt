import { useReducer } from 'react'

import './App.css'

function NameList() {
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
    <div className="nameList-container">
      <div>
        {state.names.map((name, index) => 
          <div key={name + "_" + index}>{name}</div>
        )}
      </div>
      <input 
        type="text"
        value={state.name}
        onChange={onInputChange} />
      <div>
        <button onClick={onButtonClick}>Add Name</button>
      </div>
    </div>
  )
}

function Form() {
  const [state, dispatch] = useReducer(
    //-- reducer function
    (state, action) => ({
      ...state, ...action
    }), 
    //-- initial state
    {
      firstName: "",
      lastName: ""
    });

  return (
    <div className="form-container">
      <form>
      <label>First Name  </label>
      <input 
        type="text"
        value={state.firstName}
        onChange={(e) => dispatch({ firstName: e.target.value })} />
      </form>
      <form>
      <label>Last Name  </label>
      <input 
        type="text"
        value={state.lastName}
        onChange={(e) => dispatch({ lastName: e.target.value })} />
      </form>
      <div>First Name: {state.firstName}</div>
      <div>Last Name: {state.lastName}</div>
    </div>
  )
}

const AppUseReducer = () => {
  return (
    <>  
      <NameList />
      <Form />
    </>
  )
}

export default AppUseReducer
