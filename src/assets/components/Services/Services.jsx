import React from 'react';
import { Link } from "react-router-dom";
import img1 from "/src/assets/gtr1.png";
import img2 from "/src/assets/vln.png";
import img3 from "/src/assets/keybord.png";
import img4 from "/src/assets/piano.png";
import img5 from "/src/assets/trumpet.png";
import img6 from "/src/assets/singer.png";

const ServicesData = [
    
    {
      id: 1,
      img: img2,
      name: "Violin Lessons",
      description:
        "Welcome to our online violin lessons platform, where the harmonious blend of ...",
    },
    {
        id: 2,
        img: img1,
        name: " Guitar Lessons",
        description:
          "Welcome to our online guitar lessons hub, where the strings of creativity meet the chords of possibility.",
      },
    
    
      {
        id: 3,
        img: img3,
        name: " Keybord Lessons",
        description:
          " Welcome to our online keybord lessons hub..",
          
      },

    
      {
        id: 4,
        img: img4,
        name: " Piano Lessons",
        description:
          " Welcome to our online Piaono lessons hub..",
      },
      {
        id: 5,
        img: img5,
        name: " Sexaphone Lessons",
        description:
          " Welcome to our online Sexaphone lessons hub..",
      },

      {
        
        id: 6,
        img: img6,
        name: " Vocal Lessons",
        description:
          " Welcome to our online Vocal lessons hub..",
      },
    
  ];

const Services = () => {
  return (
    <>
    <span id="services"></span>
    <div  className="py-10">
        <div className='contnr'>

            <div className="text-center mb-20 max-w-[800px] mx-auto">

            
            <h1 className="text-3xl font-bold">Services</h1>
            <br></br>
            <p className="txt-xs text-gray-800">
            We offer 180 fully developed, sequential lessons that seamlessly integrate social emotional 
            learning competencies and musical skills vertically aligned for various age levels. In addition, 
            EEMC includes a wealth of growing resources, including a library of Hal Leonard Digital Books, 
            full Recorder and Ukulele Methods, as well as hundreds of worksheets and online activities.
            <br></br>
            <br></br>
            </p>
            </div>
            <div className="grid grid-cols-3  sm:grid-cols-2 md:grid-cols-3 
            gap-54 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <Link
              to={service.link}
                data-aos="zoom-in"
                data-aos-duration="400"
                className="rounded-2xl bg-gray dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary 
                hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[200px]" >
                  <br></br>
                  <br></br>
                 
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                  
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
                

                

            </div>
        </div>

    </div>
    
    </>
  )
}

export default Services