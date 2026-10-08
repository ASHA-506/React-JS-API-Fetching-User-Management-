import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
 import "./SearchBar.css"


export default function SearchBar({setResults}) {

    const [input,setInput] = useState("")



    const fetchData = async (value) => {
        try {
            const response = await fetch("https://api.slingacademy.com/v1/sample-data/users")
            let data      =   await  response.json()
            console.log(data.users);
            let usersList = data.users
            let results = usersList.filter((user)=>{
                return value && user && user.first_name && user.first_name.toLowerCase().includes(value)
            })

setResults(results) 

        } catch (err) {
            console.log(err);
            
        }


    }
    useEffect((value)=>{
        fetchData()
    },[])


    const handleChange=(value)=>{
setInput(value)
fetchData(value)
    }
  return (
    <div className='input-wrapper'
    ><FaSearch id='search-icon'/>
    <input type="text" placeholder='Type to search....' 
    value={input}
    onChange={(e)=>handleChange(e.target.value)}/>
        </div>

  )
}
