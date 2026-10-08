import React from 'react'
import "./SearchResults.css"

export default function SearchResults({result}) {
  return (
    <div className='search-result'
    onClick={(e)=>alert(`you clicked on ${result.first_name}  ${result.last_name} 
    Sudent ID is ${result.id} `)}>
      {result.first_name }  {result.last_name}
    </div>
  )
}
