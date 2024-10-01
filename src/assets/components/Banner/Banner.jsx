import React from 'react'
import Vector from "/src/assets/vector3.png";
import img2 from "/src/assets/banner.png"

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
   <>
   <div className="min-h-[550px]"
   >
    <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0"
    >
    <div 
    data-aos="slide-up"
     data-aos-duration="300"
     className="container2">

          <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
          <div>
                <img
                  src={img2}
                  alt=""
                  
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                Frequently Asked Questions.
                </h1>
                <h2 >
                What is Essential Elements Music Class?
                </h2>

                
                  <br />
                  Music Class provides over 1,600 interactive resources for the general music 
                  classroom and is available on any internet-connected device. Teachers can easily share 
                  content directly with students without logins or passwords, allowing them to use EE Music 
                  Class with any learning management system, such as Seesaw or Google Classroom.
                   Most importantly, the content is carefully curated and meticulously edited to 
                   provide the highest 
                  quality interactive materials using the most popular songs available from Hal Leonard.
                  
                  
                  <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    More
                  </button>
                </div>
                </div>
            </div>
            </div>    

    </div>


    </div>

   
   </>
  )
}

export default Banner;