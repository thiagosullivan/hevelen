import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { SearchContainer, SearchForm } from './style';

function SearchComp({setShowSearch}) {
  return (
    <SearchContainer>
        <SearchForm>
            <input type='text'/>
            <button>Procurar</button>
        </SearchForm>
        <div onClick={() => setShowSearch(false)} className='close__search'>
            <MdOutlineClose />
        </div>
    </SearchContainer>
  )
}

export default SearchComp