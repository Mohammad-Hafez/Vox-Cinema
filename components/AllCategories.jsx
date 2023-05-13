'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
export default function AllCategories() {
    const [Categories, setCategories] = useState([])
    async function getCategories(){
        try {
            const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=bf309c33d1b1d0d3e77e80388ce67415&language=en-US`, {method: "Get"})
            const response = await data.json()
            setCategories(response.genres)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getCategories()
    },[])
  return (
    <div className='container bg-lightblue rounded mb-3 p-2'>
        <h1 className='h4 text-dark'>
            Get Your Movie By Category :
        </h1>
        <div className="row g-2">
            {Categories?.map((category)=> <div key={category.id} className="col-md-2 col-3">
                <Link href={`specificCategory/${category.id}`} className='text-decoration cursor-pointer text-center'>
                    <h2 className='h6 text-light m-0 p-0 category-link rounded'>
                        {category.name}
                    </h2>
                </Link>
            </div> )}
        </div>
    </div>
  )
}
