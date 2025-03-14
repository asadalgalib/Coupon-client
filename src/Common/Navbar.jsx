import React, { useState } from 'react';
import logo from '../assets/Coupon-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* navbar for large device */}
            <div className='xl:px-56 lg:px-20 px-4 flex items-center justify-between'>
                <div className='flex items-end gap-2'>
                    <h1 className='text-xl font-semibold text-slate-700 hidden lg:inline'>COUPON</h1>
                    <div className='lg:hidden' onClick={()=>setIsOpen(!isOpen)}>
                        {
                            isOpen ? <RxCross2 className='text-[30px]' /> : <Menu size={30}></Menu>
                        }
                    </div>
                    <img src={logo} className='w-8 h-8' alt="logo" />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='hidden lg:inline'>
                        <ul className='flex items-center gap-2'>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:border-blue-400'><li>Home</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:border-blue-400'><li>All Coupons</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:border-blue-400'><li>Daily Offers</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:border-blue-400'><li>Contact</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:border-blue-400'><li>Blog</li></NavLink>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <div className="avatar avatar-online">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar for small device */}
            <div className={`bg-blue-400 ${isOpen ? 'inline-block' : 'hidden'} lg:hidden w-full`}>
                <ul className='flex flex-col gap-2 items-center py-2 text-white'>
                    <Link className='py-2 w-40 text-center border-l-8 border-transparent hover:border-white'><li>Home</li></Link>
                    <Link className='py-2 w-40 text-center border-l-8 border-transparent hover:border-white'><li>All Coupons</li></Link>
                    <Link className='py-2 w-40 text-center border-l-8 border-transparent hover:border-white'><li>Daily Offers</li></Link>
                    <Link className='py-2 w-40 text-center border-l-8 border-transparent hover:border-white'><li>Contact</li></Link>
                    <Link className='py-2 w-40 text-center border-l-8 border-transparent hover:border-white'><li>Blog</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;