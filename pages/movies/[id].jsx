import Image from 'next/image';

export default function selectedMovie(props) {
    let movie = props.movie
    console.log(movie);
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="moviePoster">
                    <Image src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} fill className="object-cover movieContanierimg position-relative rounded mb-2"  alt="Movie_Poster"/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="movieDescription text-light">
                    <h2>
                        {movie.title}
                    </h2>
                    <p >
                    <span className="text-blue">Released at : </span>{movie.release_date}
                    </p>
                    <h3 className="h6">
                        {movie.genres.map((genre , index)=> <span key={index} className="badge bg-primary mx-1">
                        {genre.name}
                        </span>)}
                    </h3>
                    <p>
                        <span className="text-blue">Overview : </span> {movie.overview}
                    </p>
                    <p className="text-blue">
                        Language : <span className="text-light text-capitalize">{movie.original_language}</span>
                    </p>
                    <p>
                    <span className="text-blue">Rating : </span>{movie.vote_average.toFixed(1)} <i className="fa-solid fa-star star"></i>
                    </p>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export async function getStaticPaths(){
    const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=bf309c33d1b1d0d3e77e80388ce67415" , {method: "Get"})
    const response = await data.json()
    const paths = response.results.map((movie)=>{return { params:{id :`${movie.id}`} } })
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(context){
    const data =await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=bf309c33d1b1d0d3e77e80388ce67415&language=en-US`)
    const response = await data.json()
    return {
    props:{
        movie: response
    }
}
}