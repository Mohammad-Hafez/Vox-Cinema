export async function getStaticProps(){
    const data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=bf309c33d1b1d0d3e77e80388ce67415&language=en-US" , {method: "Get"})
    const response = await data.json()
    return {
      props:{categories : response }
    }
  }
  
export default function AllCategories(props) {
    let responseData = props
    console.log(responseData);
  return (
    <div>AllCategories</div>
  )
}
