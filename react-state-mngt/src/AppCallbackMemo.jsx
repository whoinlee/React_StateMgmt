/* eslint-disable react/prop-types */
import { useState, useMemo, useCallback } from 'react'
import './App.css'

function SortedList ( { label, list, sortFunc } ) {
  const sortedList = useMemo(() => {
    console.log("sortedList")
    // return [...list].sort();
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>Sorted {label}: {sortedList.join(", ")}</div>
}

const AppCallbackMemo = () => {
  const [names] = useState(["name3", "name1", "name2", "nameN"]);
  // const sortedNames = useMemo(() => [...names].sort(), [names]);

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <>  
      <div>Names: {names.join(", ")}</div>
      {/* <div>Sorted Names: {sortedNames.join(", ")}</div> */}
      <SortedList label="Names" list={names} sortFunc={sortFunc} />
    </>
  )
}

export default AppCallbackMemo
