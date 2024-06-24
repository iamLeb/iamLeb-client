import { motion } from 'framer-motion';
import { CiLocationArrow1 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        },
    };

    const containerVariant = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <>
            <section className={'text-white py-9'}>
                <div className={'container mx-auto'}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariant}
                        className="text-2xl md:text-5xl flex flex-col gap-6 py-9 md:py-16 text-center"
                    >
                        <motion.h1 variants={textVariant} className={'font-bold'}>
                            Revamp, Build, Engage:
                        </motion.h1>
                        <motion.h1 variants={textVariant} className={'hidden md:block font-bold'}>
                            The Ultimate Web Services Suite
                        </motion.h1>
                        <motion.p variants={textVariant} className={'text-sm md:text-md'}>
                            Select from our specialized services to start growing your business today.
                        </motion.p>
                    </motion.div>
                </div>

                <div className={'container mx-auto md:flex gap-4 px-4 md:px-0 space-y-6 md:space-y-0'}>
                    <div className={'bg-[#eae6ff] rounded-xl flex-1'}>
                        <div className={'p-6'}>
                            <div className={'flex flex-col gap-4 py-4 text-neutral-900 font-medium '}>
                                <h1 className={'text-xl md:text-2xl'}>Website Redesigns by Our Experts</h1>
                                <p className={'text-xs md:text-sm'}>
                                    We will completely redesign your website from start to finish, using a lead-driven approach.
                                </p>
                            </div>
                            <button className={'flex items-center gap-4 badge bg-neutral-800 transition-all duration-300 hover:scale-105'}>
                                <span>View Product</span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                        <div className={'overflow-hidden pl-9 rounded-r-lg'}>
                            <img className={'object-center object-cover rounded-l-xl'}
                                 src="https://webdev.com/wp-content/uploads/2024/03/Website-Redesigns-tide.png" alt="" />
                        </div>
                    </div>
                    <div className={'bg-[#f6e4fa] rounded-xl flex-1'}>
                        <div className={'p-6'}>
                            <div className={'flex flex-col gap-4 py-4 text-neutral-900 font-medium '}>
                                <h1 className={'text-xl md:text-2xl'}>Website Redesigns by Our Experts</h1>
                                <p className={'text-xs md:text-sm'}>
                                    We will completely redesign your website from start to finish, using a lead-driven approach.
                                </p>
                            </div>
                            <button className={'flex  items-center gap-4 badge bg-neutral-800 transition-all duration-300 hover:scale-105'}>
                                <span>View Product</span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                        <div className={'overflow-hidden pl-9 rounded-r-lg'}>
                            <img className={'object-center object-cover rounded-l-xl'}
                                 src="https://webdev.com/wp-content/uploads/2024/03/slide_0-cut.png" alt="" />
                        </div>
                    </div>
                    <div className={'bg-[#fff6d2] rounded-xl flex-1'}>
                        <div className={'p-6'}>
                            <div className={'flex flex-col gap-4 py-4 text-neutral-900 font-medium '}>
                                <h1 className={'text-xl md:text-2xl'}>Website Redesigns by Our Experts</h1>
                                <p className={'text-xs md:text-sm'}>
                                    We will completely redesign your website from start to finish, using a lead-driven approach.
                                </p>
                            </div>
                            <button className={'flex  items-center gap-4 badge bg-neutral-800 transition-all duration-300 hover:scale-105'}>
                                <span>View Product</span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                        <div className={'overflow-hidden pl-9 rounded-r-lg'}>
                            <img className={'object-center object-cover rounded-l-xl'}
                                 src="https://webdev.com/wp-content/uploads/2024/03/dashboard-SaaS-cut.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
