import React from 'react'
import Navbar from "/src/assets/components/Navbar/Navbar";
import New from "/src/assets/components/New/New";
import Services from "/src/assets/components/Services/Services";
import Banner from "/src/assets/components/Banner/Banner";
import Testimonial from "/src/assets/components/Testimonial/Testimonial";
import Footer from "/src/assets/components/Footer/Footer";

const Home = () => {
    return (
      <>

        <Navbar />
        <New/>
        <Services />
        <Banner />
        <Testimonial />
        <Footer/>
      </>
    );
  };
  
  export default Home;