import Footer from "./Footer"
import Navbar from "./Navbar"
import AllCategories from '@/components/AllCategories'
export default function Layout(props) {
  return <>
  <Navbar/>
  <AllCategories/>
  {props.children}
  <Footer/>
  </>
}
