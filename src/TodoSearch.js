import React from 'react';
import './TodoSearch'

function TodoSearch({
    searchValue,
    setSearchValue
}) {
    return (
        <input 
            placeholder="Cortar cebolla" 
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                    setSearchValue(event.target.value);
            }}
        />
    )
}

export { TodoSearch };