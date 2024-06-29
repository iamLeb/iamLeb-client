import { SiWebmoney } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbBrandAirtable } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { FaBuysellads } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
const About = () => {
    const boxes = [
        {
            icon: <SiWebmoney
                className={'border-2 p-3 border-[#f8fbff] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                size={58}/>,
            title: 'Website Development',
            content: "We offer comprehensive website development services, including design, implementation, and maintenance, to help your business succeed online."
        },
        {
            icon: <AiOutlineAntDesign
                className={'border-2 p-3 border-[#f8fbff] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                size={58}/>,
            title: 'Graphic Design',
            content: "Our graphic design services enhance your brand's visual identity, ensuring your marketing materials are both striking and cohesive."
        },
        {
            icon: <TbBrandAirtable
                className={'border-2 p-3 border-[#f8fbff] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                size={58}/>,
            title: 'Branding',
            content: "We specialize in creating strong brand identities that resonate with your target audience and differentiate you from the competition."
        },
        {
            icon: <IoMdBook
                className={'border-2 p-3 border-[#f8fbff] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                size={58}/>,
            title: 'Content Writing',
            content: "Our content writing services provide engaging and SEO-friendly content to help you attract and retain customers."
        },
        {
            icon: <FaBuysellads
                className={'border-2 p-3 border-[#f8fbff] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                size={58}/>,
            title: 'Ad Management',
            content: "We offer expert ad management services to help you reach your target audience and maximize your return on investment."
        },
        {
            icon: <CiHeadphones
                className={'border-2 p-3 border-[#f8fbff] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                size={58}/>,
            title: 'Virtual Assistant',
            content: "Our virtual assistant services provide you with professional support for administrative tasks, allowing you to focus on your core business activities."
        }
    ];

    return (
        <>
            <section className={'bg-[#f8fbff] py-14'}>
                <div className={'container mx-auto'}>
                    <div className="flex flex-col items-center text-neutral-700">
                        <div className={'flex flex-col justify-center items-center gap-4 text-center pb-20'}>
                            <div
                                className={'font-light text-xl text-primary px-3 border-r-2 border-l-2 border-primary'}>
                                <span className={'text-sm'}>What we do</span>
                            </div>
                            <h1 className={'text-3xl md:text-6xl font-bold md:w-2/3'}>Leading Exceptional Business
                                Solutions</h1>
                        </div>

                        <div className={'grid grid-cols-1 md:grid-cols-3 md:py-5 px-3 gap-8'}>
                            {boxes.map(box => (
                                <div key={box.title}
                                     className={'relative flex flex-col space-y-3 bg-white p-5 rounded-lg shadow'}>
                                    {box.icon}
                                    <h1 className={'font-bold text-md'}>{box.title}</h1>
                                    <span className={'border-b border-[#faf2dd]'}></span>
                                    <p className={'text-sm'}>{box.content}</p>

                                    <div className={'transition duration-300 ease-in-out hover:text-primary-dark cursor-pointer flex items-center space-x-4 text-primary font-light text-right'}>
                                        <span>Read More</span>
                                        <GoArrowRight
                                            className={'transition duration-300 ease-in-out hover:text-primary-dark'}/>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;