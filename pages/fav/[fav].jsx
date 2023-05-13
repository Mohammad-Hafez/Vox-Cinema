'use client';
import { useFavorites } from '@/utils/favContext'
import { useState, useEffect } from 'react'
export default function Favorites() {
  const { favorites } = useFavorites()
  const [favoriteMovies, setFavoriteMovies] = useState([])
  async function fetchFavorites (id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf309c33d1b1d0d3e77e80388ce67415&language=en-US`)
    const data = await res.json()
    return data
  }
  async function testt(){
    const movies = favorites.map((movie)=>{
       return fetchFavorites(movie )
    })
  
  }
  useEffect(() => {
    setFavoriteMovies(testt())  
    console.log(favoriteMovies);
}, [favorites])
  return (
    <div className='container'>
      <h1 className='text-light h4'>Favorite Movies :</h1>
      <ul>
        {favoriteMovies}
      </ul>
    </div>
  )
}
