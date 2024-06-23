import { FaRegUserCircle } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
    return (
        <section className={'bg-white shadow-md py-4 px-2 fixed w-full'}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <h1 className={'text-2xl md:text-3xl'}>iam<span className={'font-bold text-primary'}>Leb</span></h1>
                <ul className={'hidden md:flex space-x-8 font-medium'}>
                    <li>
                        <span className={'text-primary cursor-pointer'}>Products</span>
                    </li>
                    <li>
                        <span className={'hover:text-primary cursor-pointer'}>Portfolio</span>
                    </li>
                    <li>
                        <span className={'hover:text-primary cursor-pointer'}>About Us</span>
                    </li>
                    <li>
                        <span className={'hover:text-primary cursor-pointer'}>Our Brand</span>
                    </li>
                </ul>
                <button className={'hidden md:flex items-center btn'}>
                    <FaRegUserCircle />
                    <span>Login</span>
                </button>

                {/*Mobile View*/}
                <div className={'block md:hidden'}>
                    <TiThMenuOutline size={26} />
                </div>
            </div>
        </section>
    );
};

export default Header;