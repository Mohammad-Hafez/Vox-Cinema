import Link from "next/link"
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  function getSearch(val) {
    if (val.trim() !== "") {
      router.push(`/search/${val}`)
    } else {
      router.push('/')
    }
  }
  return <>
  <nav className="navbar navbar-expand-lg  bg-main navbar-dark sticky-top">
  <div className="container ">
    <Link className="navbar-brand" href="/">Vox Movie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <div className=" d-flex justify-content-between align-items-center w-100">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  href="/movies">All Movies</Link>
        </li>
          </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <Link className="nav-link"  href="/fav"> <i className="fa-solid fa-heart text-danger cursor-pointer"></i></Link>
      </ul>
      <form className="d-flex" role="search">
        <input onChange={(e)=>{ getSearch(e.target.value) }} className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  </div>
</nav>
  </>
}
