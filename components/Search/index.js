import React, { useState } from 'react';
import { useRouter } from "next/router";
import { MdOutlineClose } from 'react-icons/md';
import { SearchContainer, SearchForm } from './style';

function SearchComp({setShowSearch}) {

  const [search, setSearch] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const router = useRouter();

  return (
    <SearchContainer>
        <SearchForm
          onSubmit={event => {
            event.preventDefault()
            setIsSearchLoading(true)
  
            router.push(`/resultados?s=${search}`)
  
            setTimeout(() => setIsSearchLoading(false), 400)
  
            setSearch('')
            setShowSearch(false)
          }}
        >
            <input
              placeholder="Pesquisar"
              type="text"
              value={search}
              onChange={event => setSearch(event.target.value)}
              required
            />
            <button type='submit'>Procurar</button>
        </SearchForm>
        <div onClick={() => setShowSearch(false)} className='close__search'>
            <MdOutlineClose />
        </div>
        {isSearchLoading && 'carregando...'}
    </SearchContainer>
  )
}

export default SearchComp