import ancy from "../../assets/images/ancy.png";
import banner from "../../assets/images/Banner.png";
import agency from "../../assets/images/Agency.png";
import play from "../../assets/images/play.png";

import { AiFillOpenAI } from "react-icons/ai";
import {useState} from "react";
import {FaArrowRightLong} from "react-icons/fa6";

const images = [
    { src: ancy, category: 'Website' },
    { src: banner, category: 'Logo' },
    { src: agency, category: 'Ad Management' },
    { src: play, category: 'Social Media' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg", category: 'Website' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg", category: 'Logo' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg", category: 'Ad Management' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg", category: 'Social Media' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg", category: 'Website' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg", category: 'Logo' },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg", category: 'Ad Management' },
];

const Project = () => {
    const [category, setCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    const filteredImages = category === 'All' ? images : images.filter(image => image.category === category);

    return (
        <section className={'text-white bg-neutral-800 py-9'}>
            <div className={'flex flex-col items-center gap-4 pt-5'}>
                <AiFillOpenAI className={'text-6xl'} />
                <h1 className={'text-5xl font-bold'}>Portfolio</h1>
                <div className={'border border-b w-20'}></div>

                <div className={'flex flex-col items-center gap-4 py-6'}>
                    <ul className={'px-5 flex justify-center items-center  pb-5'}>
                        {['All', 'Website', 'Logo', 'Ad Management', 'Social Media'].map(cat => (
                            <li key={cat}>
                                <span
                                    onClick={() => handleCategoryClick(cat)}
                                    className={`cursor-pointer px-5 py-1 rounded-full ${category === cat ? 'bg-primary text-white border border-primary' : 'hover:bg-primary text-white'}`}
                                >
                                    {cat}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className={'flex justify-center text-center pt-6'}>
                        <button
                            className={'flex transition-all duration-300 items-center space-x-4 bg-primary text-white px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark'}>
                            <span>Schedule Appointments</span>
                            <FaArrowRightLong/>
                        </button>
                    </div>
                    <div
                        className="container mx-auto bg-white p-9 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                        {filteredImages.map((image, index) => (
                            <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={image.src} alt=""/>
                            </div>
                        ))}
                    </div>
                    <div className={'flex justify-center text-center pt-6'}>
                        <button
                            className={'flex transition-all duration-300 items-center space-x-4 bg-primary text-white px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark'}>
                            <span>Schedule Appointments</span>
                            <FaArrowRightLong/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
