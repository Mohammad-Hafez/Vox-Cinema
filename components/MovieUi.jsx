import Link from "next/link"
import Image from 'next/image';
import AddToFavorites from "./Store";
export default function MovieUi({responseData}) {
  return <>
        {responseData?.map((movie)=><><div key={movie.id} className="col-lg-2 col-md-3 col-sm-4 col-6" >
          <div className="movie p-2 position-relative d-flex flex-column justify-content-between">
                <Link href={`movies/${movie.id}`} className="p-0 m-0 text-decoration flex-grow-1">
                  <div className='movieContanier cursor-pointer text-center  position-relative'> 
                  <Image src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} fill className="object-cover movieContanierimg position-relative rounded mb-2"  alt="Movie_Poster"/>
                  <h3 className='h5 text-blue'>
                  {movie.title}
                  </h3>
                  <span className='vote rounded p-1'>
                    {movie.vote_average.toFixed(1)} <i className="fa-solid fa-star star"></i>
                  </span>
                  </div>
                </Link>
                <AddToFavorites id= {movie.id}/> 
          </div>
        </div>
        
        </>
        )}
  </>
}
