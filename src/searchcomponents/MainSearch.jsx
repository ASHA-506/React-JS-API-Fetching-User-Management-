import React from 'react'
import { useState } from 'react'
import './MainSearch.css'
import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'
import { Link } from 'react-router-dom'



function MainSearch() {
const [results,setResults] = useState([])

  return (


    <div className="App">
        <Link to={'/dashboard'}> <h2 style={{color:'red',backgroundColor:'white'}}> Back to Student Details</h2></Link>
      <div className="search-bar-container">
        <SearchBar setResults = {setResults}/>
        <SearchResultsList  results = {results}/>


    </div>
    </div>

  )
}

export default MainSearch