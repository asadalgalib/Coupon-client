import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero min-h-[80vh]"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-3 text-5xl font-bold text-white">Only the best discounts & coupons</h1>
                    <p className='text-white mb-3'>Over 17 working discount & coupon codes is active for 3 users, enjoy!</p>
                    <form className='max-w-xl mx-auto'>
                        <div className="flex items-center justify-between max-w-md mx-auto bg-white border border-gray-300 rounded-full shadow-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                            />
                            <button onClick={(e)=> e.preventDefault()}
                                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 10.65A6 6 0 1010.65 16.65a6 6 0 006-6z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;