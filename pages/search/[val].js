'use client';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MovieUi from '@/components/MovieUi';
export default function searchedMovie() {
    const [movies, setMovies] = useState([])
    const router = useRouter()
    const {val} = router.query
    async function getSearchMovies(val){
        try{
    const data = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=a51a2678a6ebc32710f900cff1862764&language=en-US&query=${val}&page=1&include_adult=false`)
    const response = await data.json()
    setMovies(response.results)
}
catch(error){
    setMovies("Sorry No Results Founded" + error)
}
    }
    useEffect(()=>{
        getSearchMovies(val)
    },[])
    return (
    <div className="container">
        <div className="row g-4">
            <MovieUi responseData={movies} />
        </div>
    </div>
    )
}
