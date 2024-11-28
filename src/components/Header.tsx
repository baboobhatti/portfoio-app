'use client'
import Link from 'next/link';
import '../customstyling/header.css'
import { useState } from 'react';

const Header = () => {
  
  const [navbar, setNavbar] = useState(false);
  
  return (
    <>
      <div className='hmain'>
      <div className='nav'><h1>CodingZone</h1></div>
      
      <div className={`${navbar ? 'sdivlinks': 'divlinks'} divlinks`}>
       <ul className='routes'>
        <li><Link className='links' href='/'>Home</Link></li>
        <li><Link className='links' href='../projects'>Projects</Link></li> 
        <li><Link className='links' href='../about'>About</Link></li>
        <li><Link className='links' href='../contact'>Contact</Link></li>
       </ul>
      </div>
      <div className='menudiv'>
        <button className='btn-size' onClick={()=>{
          setNavbar(!navbar);
        }} >
           ☰
        </button>
        </div> 
        </div>      
    </>
  )
}

export default Header
