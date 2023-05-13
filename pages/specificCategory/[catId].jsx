import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MovieUi from '@/components/MovieUi'
export default function SpecificCategory() {
    const router = useRouter()
    const {catId} = router.query
    const [CatMovies, setCatMovies] = useState([])
    async function getAllCatsMovies(id) {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bf309c33d1b1d0d3e77e80388ce67415&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${id}`)
      const data = await res.json()
      setCatMovies(data.results)
    }   
      useEffect(()=>{
        getAllCatsMovies(catId)
      },[])
  return <>
    {CatMovies ? <>
      <div className='container'>
        <div className="row">
          <MovieUi responseData={CatMovies}/>
        </div>
      </div>
      </>
      :<>
        <div className="container">
          <h1>
            This Category Isn't Contain Any Movies Now , 
          </h1>
        </div>
      </>
    }
    </>
}
