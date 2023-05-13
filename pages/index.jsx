import MovieUi from '@/components/MovieUi'
import Head from 'next/head'
export async function getStaticProps(){
  const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=bf309c33d1b1d0d3e77e80388ce67415" , {method: "Get"})
  const response = await data.json()
  return {
    props:{Home : response,
      fallback: true}
    
  }
}
export default function Home(props) {
  let responseData = props.Home.results
  return (
    <>
      <Head>
        <title>Trending Movies App</title>
        <meta name="description" content="Watch All Trending Movies, Now You Shouldn't Go to Cinema" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container py-3 mb-2">
            <div className="row g-4">
              <div className="col-md-3">
                  <div className="brdr w-25 mb-3"></div>
                    <h2 className='h3 text-light'>Top Trending <br/>Movies In This Week<br/>  To Watch </h2>
                  <div className="brdr w-100 mt-3"></div>
                </div>
              <MovieUi responseData={responseData}></MovieUi>
            </div>
        </div>
      </main>
    </>
  )
}
