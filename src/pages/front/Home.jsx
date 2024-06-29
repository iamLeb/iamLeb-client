import React from 'react';
import Hero from "../../components/frontComponents/Hero.jsx";
import Carousel from "../../components/frontComponents/Carousel.jsx";
import About from "../../components/frontComponents/About.jsx";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Carousel />
        </div>
    );
};

export default Home;