/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react'
import './App.css'

function SortedList ( { label, list } ) {
  const sortedList = useMemo(() => {
    return [...list].sort();
  }, [list]);
  return (
    // <div>Sorted {label}: {sortedList.join(", ")}</div>
    <div>Sorted {label}: {sortedList.join(", ")}</div>
  )
}

const AppCallbackMemo = () => {
  const [names] = useState(["name3", "name1", "name2", "nameN"]);
  // const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <>  
      <div>Names: {names.join(", ")}</div>
      {/* <div>Sorted Names: {sortedNames.join(", ")}</div> */}
      <SortedList label="Names" list={names} />
    </>
  )
}

export default AppCallbackMemo
