import { motion } from 'framer-motion';
import { MdArrowForward } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
    const fadeVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 25
            }
        },
    };

    const sequenceVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section className={'text-gray-100 py-10'}>
            <div className={'container mx-auto'}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sequenceVariant}
                    className="text-3xl md:text-5xl flex flex-col gap-5 py-10 md:py-18 md:pt-24 text-center"
                >
                    <motion.h1 variants={fadeVariant} className={'font-extrabold'}>
                        Imagine, Achieve, Maximize:
                    </motion.h1>
                    <motion.h1 variants={fadeVariant} className={'hidden md:block font-extrabold'}>
                        Leading Exceptional Business Solutions
                    </motion.h1>
                    <motion.p variants={fadeVariant} className={'text-base md:text-lg'}>
                        Choose from our tailored solutions to elevate your business now.
                    </motion.p>
                </motion.div>
            </div>

            <div className={'container mx-auto md:flex gap-5 px-5 md:px-0 space-y-5 md:space-y-0'}>
                <div className={'bg-[#f0e5ff] rounded-2xl flex-1'}>
                    <div className={'overflow-hidden pl-10 rounded-r-2xl'}>
                        <img className={'object-center object-cover rounded-l-2xl'}
                             src="https://webdev.com/wp-content/uploads/2024/03/Website-Redesigns-tide.png"
                             alt="Website Redesigns"/>
                    </div>
                    <div className={'p-7'}>
                        <div className={'flex flex-col gap-3 py-5 text-neutral-900 font-semibold '}>
                            <h1 className={'text-2xl md:text-3xl'}>Expert Website Overhauls</h1>
                            <p className={'text-sm md:text-base'}>
                                Our team will revamp your website from top to bottom, focusing on lead generation.
                            </p>
                        </div>
                        <button
                            className={'flex items-center gap-3 badge bg-neutral-700 transition-transform duration-300 hover:scale-105'}>
                            <span>Learn More</span>
                            <FaLongArrowAltRight/>
                        </button>
                    </div>

                </div>

                <div className={'bg-[#f8fbf1] rounded-2xl flex-1'}>
                    <div className={'p-7'}>
                        <div className={'flex flex-col gap-3 py-5 text-neutral-900 font-semibold '}>
                            <h1 className={'text-2xl md:text-3xl'}>Site Redesigns by Specialists</h1>
                            <p className={'text-sm md:text-base'}>
                                Complete redesign services for your website, tailored for better leads.
                            </p>
                        </div>
                        <button
                            className={'flex  items-center gap-3 badge bg-neutral-700 transition-transform duration-300 hover:scale-105'}>
                            <span>See Details</span>
                            <FaLongArrowAltRight/>
                        </button>
                    </div>
                    <div className={'overflow-hidden pl-10 rounded-r-2xl'}>
                        <img className={'object-center object-cover rounded-l-2xl'}
                             src="https://webdev.com/wp-content/uploads/2024/03/dashboard-SaaS-cut.png"
                             alt="Site Redesigns by Specialists"/>
                    </div>
                </div>

                <div className={'bg-[#f8e8fd] rounded-2xl flex-1'}>
                    <div className={'overflow-hidden pl-10 rounded-r-2xl'}>
                        <img className={'object-center object-cover rounded-l-2xl'}
                             src="https://webdev.com/wp-content/uploads/2024/03/slide_0-cut.png"
                             alt="Professional Site Revamps"/>
                    </div>
                    <div className={'p-7'}>
                        <div className={'flex flex-col gap-3 py-5 text-neutral-900 font-semibold '}>
                            <h1 className={'text-2xl md:text-3xl'}>Professional Site Revamps</h1>
                            <p className={'text-sm md:text-base'}>
                                We undertake a complete overhaul of your site, focusing on user engagement.
                            </p>
                        </div>
                        <button
                            className={'flex  items-center gap-3 badge bg-neutral-700 transition-transform duration-300 hover:scale-105'}>
                            <span>Discover More</span>
                            <FaLongArrowAltRight/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
