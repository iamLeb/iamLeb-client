const Footer = () => {

    return (
    <footer className="bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <h1 className="text-center md:text-start text-2xl text-white md:text-3xl">
                iam<span className="font-bold text-primary">Leb</span>
            </h1>
            <ul className="flex justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:text-primary transition-all duration-300 me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary transition-all duration-300 me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary transition-all duration-300 me-4 md:me-6">Contact</a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary transition-all duration-300 me-4 md:me-6">Contact</a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary transition-all duration-300 me-4 md:me-6">Login</a>
                </li>
            </ul>
        </div>
    </footer>

    );
};

export default Footer;