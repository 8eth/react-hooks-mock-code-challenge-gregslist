import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    // .then(console.log)
    .then(setListings)
  }, [])
  


  return (
    <div className="app">
      <Header listings={listings}/>
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
