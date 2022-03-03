import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    // .then(console.log)
    .then(setListings)
  }, [])
  
  const searchedListing = listings.filter((listing) => 
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(id) {
    // console.log('clicked Delete')
    fetch(`http://localhost:6001/listings/${id}`, {method: 'DELETE'})
    const newListing = listings.filter((listings) => listings.id !== id)
    setListings(newListing)
  }

  return (
    <div className="app">
      <Header onSearch={setSearchTerm}/>
      <ListingsContainer listings={searchedListing} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
