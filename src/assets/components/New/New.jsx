import React from 'react'
import img1 from "/src/assets/singer.png"
import img2 from "/src/assets/vln.png"
import Vector from "/src/assets/vector3.png";
import '/src/App.css'

const ImageList = [
{
    id:1,
    image: img1,
},

{
    id:2,
    image: img2,
},

]


const New = () => {
    const [imageId, setImageId] = React.useState(img1);
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
    <div 
    style={bgImage}
    className="min-h-[550px] sm:min-h-[600px] bg-grey-100 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white duration-200" id="new"
    
    >
       <div
       className="container1 pb-8 sm:pb-0"
       >
        <div
        className="grid grid-cols-1 sm:grid-cols-2"
        >
            <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 
            sm:order-1">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome To{" "}
                <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Online
                </span>{" "}
                Music Center
              </h1>
              
              <p className="text">
              An essential addition to all music programs, offering engaging songs, 
              standards-based lessons, social emotional learning, and interactive resources.
              </p>
             
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Subscribe now
                </button>
              </div>
            </div>
            <div
            className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 
            sm:order-2 ">
            <div
            className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  //data-aos="zoom-in"
                  //data-aos-duration="300"
                 // data-aos-once="true"
                  src={img1}
                  alt="img"
                  className="w-[250px] sm:w-[300px] "
                />

            </div>
           

            </div>

        </div>
        
        </div> 
    </div>


    </>
    
  )
}
  

export default New