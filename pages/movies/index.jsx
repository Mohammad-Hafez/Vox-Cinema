import React from 'react'
export async function getStaticProps(){
  const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=bf309c33d1b1d0d3e77e80388ce67415" , {method: "Get"})
  const response = await data.json()
  return {
    props:{Home : response }
  }
}
export default function AllMovies() {
  return (
    <div>AllMovies</div>
  )
}
