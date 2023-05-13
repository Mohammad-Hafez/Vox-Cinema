import { useFavorites } from '@/utils/favContext'
import { useState, useEffect } from 'react'
export default function Favorites() {
  const { favorites } = useFavorites()
  const [favoriteMovies, setFavoriteMovies] = useState([])
  async function fetchFavorites () {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${favorites.join()}?api_key=bf309c33d1b1d0d3e77e80388ce67415&language=en-US`)
    const data = await res.json()
    console.log(favorites);
    setFavoriteMovies(data.results)
  }
  useEffect(() => {
    fetchFavorites()
  }, [favorites])
  return (
    <div className='container'>
      <h1 className='text-light h4'>Favorite Movies :</h1>
      <ul>
        {favoriteMovies?.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}
/*
export async function getServerSideProps() {
  let favorites = []
  if (typeof window !== 'undefined') {
    favorites = JSON.parse(localStorage.getItem('favorites')) || []
  }
  return {
    props: {
      favorites
    }
  }
}*/