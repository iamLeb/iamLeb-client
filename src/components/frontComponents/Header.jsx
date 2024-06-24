import { FaRegUserCircle } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { useState, useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCaretUp } from "react-icons/rx";
import { HiOutlineLogin } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [subCategoryOpen, setSubCategoryOpen] = useState({});
    const dropdownRefs = useRef([]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const toggleSubCategory = (index) => {
        setSubCategoryOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };
    const handleClickOutside = (event) => {
        if (dropdownRefs.current) {
            dropdownRefs.current.forEach((ref, index) => {
                if (ref && !ref.contains(event.target)) {
                    setSubCategoryOpen(prevState => ({
                        ...prevState,
                        [index]: false
                    }));
                }
            });
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const links = [
        {
            label: 'Home',
            path: '/',
        },{
            label: 'Services',
            path: '/services',
            items: [
                {
                    label: 'Website Service',
                    path: '/website-service',
                }, {
                    label: 'Branding',
                    path: '/branding',
                }, {
                    label: 'Logo Design',
                    path: '/logo-design',
                }, {
                    label: 'Search Engine Optimization',
                    path: '/search-engine-optimization',
                }
            ]
        },{
            label: 'About',
            path: '/about'
        },{
            label: 'Portfolio',
            path: '/portfolio'
        },{
            label: 'Contact',
            path: '/contact'
        }
    ];
    const location = useLocation();

    return (
        <section className="relative pb-9">
            <div className="bg-white shadow-md py-5 px-4 fixed w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl md:text-3xl">
                        iam<span className="font-bold text-primary">Leb</span>
                    </h1>
                    <ul className="hidden md:flex space-x-8 font-medium">
                        {links.map((link, index) => (
                            <li key={index} className="relative" ref={el => dropdownRefs.current[index] = el}>
                                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => toggleSubCategory(index)}>
                                    <span className="text-primary">{link.label}</span>
                                    {link.items && <RiArrowDropDownLine />}
                                </div>
                                {link.items && subCategoryOpen[index] && (
                                    <div className="absolute left-0 mt-7 bg-white shadow-lg">
                                        <ul className="flex flex-col">
                                            {link.items.map((item, subIndex) => (
                                                <li key={subIndex} className="text-sm font-light px-4 whitespace-nowrap overflow-hidden border-b py-3 hover:text-primary cursor-pointer">
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button className="hidden md:flex items-center btn text-sm">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"><FaRegUserCircle/></span>
                        </span>
                        <span>Login</span>
                    </button>

                    {/* Mobile View */}
                    <div onClick={toggleSidebar} className="block md:hidden text-primary cursor-pointer">
                        {sidebarOpen ? <GrClose size={26}/> : <TiThMenuOutline size={26} />}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 bg-white w-4/5 md:w-80 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="shadow p-4">
                    <h1 className="text-2xl md:text-3xl">
                        iam<span className="font-bold text-primary">Leb</span>
                    </h1>
                </div>
                <div className="p-5">
                    <ul className="flex flex-col gap-2 border-b pb-5">
                        <li>
                            <div className="flex space-x-2 items-center border-b py-3">
                                <CiLogin className="text-primary" />
                                <span>Login</span>
                            </div>
                        </li>
                        {links.map((item, i) => (
                            <li key={item.label}>
                                <div className="flex justify-between space-x-2 items-center py-2 hover:text-primary" onClick={() => toggleSubCategory(i)}>
                                    <span className={`${location.pathname === item.path ? 'text-primary' : ''}`}>{item.label}</span>
                                    {item.items && (
                                        <div>
                                            {subCategoryOpen[i] ? <RxCaretUp /> : <RiArrowDropDownLine size={24} />}
                                        </div>
                                    )}
                                </div>
                                {item.items && (
                                    <div className={`bg-[#eae6ff] rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${subCategoryOpen[i] ? 'max-h-40' : 'max-h-0'}`}>
                                        <ul className="flex flex-col gap-2 p-3">
                                            {item.items.map((subItem, j) => (
                                                <li key={j} className="hover:text-primary">
                                                    <span>{subItem.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="py-5 border-b">
                        <button className="flex items-center justify-center space-x-2 bg-[#631fee] hover:bg-primary-dark text-white font-medium w-full py-2 rounded-lg">
                            <HiOutlineLogin />
                            <span>Join us</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 py-9 border-b">
                        <h1 className="text-lg font-bold">Contact us</h1>
                        <div className="flex items-center gap-4">
                            <BiPhoneCall size={32} />
                            <div>
                                <p className="text-gray-400 text-sm">Call us:</p>
                                <p className="font-bold text-primary"><a href="tel:12045586856">(204) 558 6856</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3 text-sm">
                        <p className="text-gray-600">Email:</p>
                        <span className="font-medium"><a href="mailto:info@iamleb.com">info@iamleb.com</a></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
