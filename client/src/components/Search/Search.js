import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <>
        <form className="search-form" role="search">
            <input 
                className="input" 
                type="search" 
                placeholder="Search Product..." 
                aria-label="Search"
                value=''
            />
            <button className="search-btn" type="submit">Search</button>
        </form>
    </>
  )
}

export default Search