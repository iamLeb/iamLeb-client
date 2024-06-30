const Contact = () => {
    return (
        <section className={'bg-[#f8fbff] py-14'}>
            <div className={'container mx-auto'}>
                <div className="flex flex-col items-center text-neutral-700">
                    <div className={'flex flex-col justify-center items-center gap-4 text-center pb-20'}>
                        <div
                            className={'font-light text-xl text-primary px-3 border-r-2 border-l-2 border-primary'}>
                            <span className={'text-sm'}>Contact</span>
                        </div>
                        <h1 className={'text-3xl md:text-6xl font-bold'}>Let's discuss your project!</h1>
                    </div>

                    <div className={'md:flex'}>
                        <div className={'overflow-hidden rounded-l-lg w-full h-full'}>
                            <img
                                className={'object-cover object-center'}
                                src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="photo"/>
                        </div>

                        <div className={'bg-white rounded-r-lg shadow-md px-9 py-3 w-full'}>
                            <form>
                                <div className={'flex flex-col gap-3 py-3'}>
                                    <input
                                        placeholder={'Name'}
                                        className={'w-full outline-none border px-5 py-3 rounded-full'}
                                        type="text"/>

                                    <div className={'flex space-x-4'}>
                                        <input
                                            placeholder={'Email'}
                                            className={'w-full outline-none border px-5 py-3 rounded-full'}
                                            type="email"/>

                                        <input
                                            placeholder={'Phone'}
                                            className={'w-full outline-none border px-5 py-3 rounded-full hide-spinner'}
                                            type="number"/>
                                    </div>
                                    <textarea
                                        placeholder={'Message'}
                                        className={'w-full outline-none border px-5 py-3 rounded-lg resize-none h-32'}></textarea>
                                </div>
                                <button className={'flex items-center space-x-2 cursor-pointer bg-primary transition-all duration-300 hover:bg-primary-dark text-white px-6 py-2 rounded-full'}>
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
