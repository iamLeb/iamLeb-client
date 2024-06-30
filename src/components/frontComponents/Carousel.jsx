import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/images/portfolio1.jpg";
import img1 from "../../assets/images/portfolio2.png";
import img4 from "../../assets/images/portfolio5.png";
import img5 from "../../assets/images/portfolio6.png";

const images = [
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_11-q4up2e3pk2vbutxb1clixh7rhzyi3smy1zql8apqg4.png",
    img,
    img4,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_12@1.2-q4upgwpz3yqr60u69mi3ftc1s8ekzi9pdugk256uck.jpg",
    img1,
    img4,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_14@1.2-q4upgvs4x4pguevjf43gvbkl6uj7rt5z1pt2kv88is.jpg",
    img,
    img4,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_15@1.2-q4uq5w9isey5sujjcxc280c69z8ulugttis8by52xw.jpg",
    img1,
    img4,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_4@1.2-q4uq4ssatdg4984vrg9qbaatbsnfmk43o3du6brm78.jpg",
    img,
    img4,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_5@1.2-q4uph56ith2c2ihvw85qk9774p8vws7af0bxdmuask.jpg",
    img1,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_9@1.2-q4uph0hbvavwggopno4lpsdw5rw1uaomqd2hz919no.jpg",
    img,
    img4,
    img5,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_11-q4up2e3pk2vbutxb1clixh7rhzyi3smy1zql8apqg4.png",
    img1,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_12@1.2-q4upgwpz3yqr60u69mi3ftc1s8ekzi9pdugk256uck.jpg",
    img,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_14@1.2-q4upgvs4x4pguevjf43gvbkl6uj7rt5z1pt2kv88is.jpg",
    img4,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_15@1.2-q4uq5w9isey5sujjcxc280c69z8ulugttis8by52xw.jpg",
    img1,
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_13@1.2-q4upgwpz3yqr60u69mi3ftc1s8ekzi9pdugk256uck.jpg",
    "https://webdev.com/wp-content/uploads/elementor/thumbs/Long-mockup_16@1.2-q4upgsymcmllvkzmvkvl5ua7eox44pus1bum51cf1g.jpg",
];

const Carousel = () => {
    return (
        <section className={'py-0 md:py-6'}>
            <div className="overflow-hidden w-full h-96 flex justify-center items-center relative">
                <div className="flex animate-scroll">
                    {images.concat(images).map((src, index) => (
                        <div key={index} className="flex-none w-64 h-96 overflow-hidden">
                            <img
                                className="object-cover object-top w-full h-full"
                                src={src}
                                alt="photo"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={'flex justify-center text-center pt-6'}>
                <button className={'flex transition-all duration-300 items-center space-x-4 bg-primary text-white px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark'}>
                    <span>Schedule Appointments</span>
                    <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
};

export default Carousel;
