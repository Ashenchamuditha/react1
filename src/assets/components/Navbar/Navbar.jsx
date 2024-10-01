import React from 'react'
import Logo from "/src/assets/logo.png"; 
import '/src/App.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-gray">
      <div className="container width-100%">
        <div
        className=" text-align:center gap-5 text-5xl sm:text-3xl font-bold">
        <a href="/home" className="  font-bold text-2xl sm:text-3xl flex gap-2 " id="c1">
                <img src={Logo} id="Logo" className="h-12 w-12"/>
                D Major Music Online Platform
                </a>
                </div>
                <ul className='flex justify-between items-center gap-5' id="navbar">
                  <li>
                    < a href ="/" className='inline-block py-4 px-8  hover:scale-105 duration-200  
                    py-2 px-4 rounded-full gap-5'>Students Enrollment</a>
                  </li>
                  <li>
                    < a href ="hii" className='inline-block py-4 px-8 hover:scale-105 duration-200  
                    py-2 px-4 rounded-full gap-5'>Class Schedule</a>
                  </li>
                  <li>
                    < a href ="#" className='inline-block py-4 px-8 hover:scale-105 duration-200  
                    py-2 px-4 rounded-full gap-5'>Teachers</a>
                  </li>
                  <li>
                    < a href ="#" className='inline-block py-4 px-8 hover:scale-105 duration-200  
                    py-2 px-4 rounded-full gap-5'>Lessons</a>
                  </li>
                  <li>
                    < a href ="#" className='inline-block py-4 px-8 hover:scale-105 duration-200  
                    py-2 px-4 rounded-full gap-5'>payments</a>
                  </li>
                  <li>
                    < a href ="#" className='inline-block py-4 px-8 hover:scale-105 duration-200 
                     py-2 px-4 rounded-full gap-5'>Gradings</a>
                  </li>
                  <li>
                  <Link
                to='/login'
                className='bg-gradient-to-r from-primary to-secondary
                hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3' id="blgn"
              >
               Login
                < div className='text-xl text-white drop-shadow-sm cursor-pointer' />
              </Link>
                 
              
              
              
              </li>
                </ul>
                </div>
                
       </div>
       
       </>
       
);
};

export default Navbar;