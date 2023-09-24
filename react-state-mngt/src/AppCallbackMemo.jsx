import { useState, useMemo } from 'react'

import './App.css'


const AppCallbackMemo = () => {
  const [names] = useState(["name3", "name1", "name2", "nameN"]);
  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <>  
      <div>Names: {names.join(", ")}</div>
      <div>Sorted Names: {sortedNames.join(", ")}</div>
    </>
  )
}

export default AppCallbackMemo
