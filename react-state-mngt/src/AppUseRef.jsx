import { useRef, useEffect, useState } from 'react'
import './App.css'

function AppUseRef() {
  const inputRef = useRef(null);
  const [names, setNames] = useState([]);

  useEffect(()=> {
    inputRef.current.focus();
  }, [])

  const onButtonClick = () => {
    setNames([...names, inputRef.current.value]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        {names.map((name, index) => 
          <div key={name + "_" + index}>{name}</div>
        )}
      </div>
      <input 
        type="text"
        ref={inputRef} />
      <button onClick={onButtonClick}>Add Name</button>
    </>
  )
}

export default AppUseRef;
