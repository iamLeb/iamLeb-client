import React from 'react';
import Hero from "../../components/frontComponents/Hero.jsx";
import Carousel from "../../components/frontComponents/Carousel.jsx";
import About from "../../components/frontComponents/About.jsx";
import Contact from "../../components/frontComponents/Contact.jsx";

const Home = () => {
    return (
        <div className={'overflow-hidden'}>
            <Hero />
            <About />
            <Carousel />
            <Contact />

        </div>
    );
};

export default Home;