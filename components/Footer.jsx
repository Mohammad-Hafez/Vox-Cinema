import React, { useEffect, useState } from 'react'
export default function Footer() {
  const [year, setyear] = useState()
  const getYear = ()=>{
    const year = new Date().getFullYear()
    setyear(year)
  }
  useEffect(()=>{getYear()},[])
  return <>
  <footer className='mt-3 pt-3 brdr border-end-0 border-start-0 border-bottom-0'>
  <div className='container text-white d-flex justify-content-center mb-4'>All Copyrights <span>&copy; </span> reserved {year}.</div>
  </footer>
  </>
}
