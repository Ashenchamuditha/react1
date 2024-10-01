import React,{useState} from 'react'
import footerLogo from "/src/assets/logo.png"; 
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              D Major Music
            </h1>
            <p className="">
              
"Streamline Your Music Education Experience with D Major Music. Discover a
 World of Musical Possibilities, 
Enhanced Learning, and Seamless Management  ©D Major Music [2024]". {" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Colombo</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+94 775476981</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/accounts/login/?hl=en">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/login">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            
          </div>
          <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-center text-justify mb-3">
                Important Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-center text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>

          
        </div>
      </section>
      <div className="text-center py-2 border-t-2 border-black-300/50">
            @copyright 2024 All rights reserved 
          </div>
    </div>
    </>
  )
}

export default Footer