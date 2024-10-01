import React from 'react'
import img1 from "/src/assets/gtr.png"
import img2 from "/src/assets/vln.png"
import Vector from "/src/assets/vector3.png";

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


const bar = () => {
    
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
    items-center dark:bg-gray-950 dark:text-white duration-200"
    
    >
       <div
       className="container pb-8 sm:pb-0"
       >
        <div
        className="grid grid-cols-1 sm:grid-cols-2"
        >
            <div>
                <h1>Welcome here </h1>
            </div>

        </div>
        
        </div> 
    </div>


    </>
  )
}

export default bar