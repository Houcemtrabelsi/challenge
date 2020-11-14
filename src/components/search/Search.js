import React from 'react'

function Search({getSearch}) {
    return (
        <div>
            <input onChange={(e)=>getSearch(e.target.value)}/>
        </div>
    )
}

export default Search
