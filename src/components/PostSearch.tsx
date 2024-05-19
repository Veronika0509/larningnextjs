'use client'
import React, {useState} from 'react';
import {getPostsBySearch} from "../app/blog/posts";

interface Props {
  onSearch: (posts: any[]) => void
}

const PostSearch = ({onSearch}: Props) => {
  const [search, setSearch] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const postsFromSearch: any = await getPostsBySearch(search)
    onSearch(postsFromSearch)
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input type="search" value={search} onChange={(event: any) => setSearch(event.target.value)} className='searchInput'/>
      <button type='submit' className='searchButton'>Search</button>
    </form>
  )
}

export default PostSearch;