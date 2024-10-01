import React from "react";
import Slider from "react-slick";
import R from "/src/assets/randunu.jpg"
import A from "/src/assets/ashen.jpg";
import L from "/src/assets/lahiru.jpg";
import C from "/src/assets/chenuka.jpg";
import N from "/src/assets/nirmal.jpg";



const testimonialData = [
  {
    id: 1,
    name: "Chamuditha Ashen",
    text: "Love th, and accessories all in one place.",
    img: A,
  },
  {
    id: 2,
    name: "Ravihansa Lahiru",
    text: "The staff here arassist with any questions I have about caring for my pet.",
    img: L,
  },
  {
    id: 3,
    name: "Kaveesha Randunu",
    text: "As a first-time pethe staff  I now have the perfect companion by my side!",
    img: R,
  },
  {
    id: 4,
    name: "Rupasingha Chenuka",
    text: "I've been a loyal custoeir wide" ,
  },
  {
    id: 5,
    name: "Nipun Nirmal",
    text: "Loving the ice.",
    img: N,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-5">
        <div className="container3">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            
            </p>
            
            <h1 className="text-3xl font-bold"> What our Audience says</h1>
            
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto w-20 h-20 object-cover"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
