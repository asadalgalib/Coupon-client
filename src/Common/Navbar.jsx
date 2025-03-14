import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/Coupon-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { RxCross2 } from 'react-icons/rx';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import anonymouse from '../assets/anonymous-user.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser, setLoading, auth } = useContext(AuthContext);

    const handleLogout = () => {
        setUser(null);
        setLoading(true);
        signOut(auth);
    }

    return (
        <div className='bg-white'>
            {/* navbar for large device */}
            <div className='xl:px-40 lg:px-20 px-4 flex items-center justify-between'>
                <div className='flex items-end gap-2'>
                    <h1 className='text-xl font-semibold text-slate-700 hidden lg:inline'>COUPON</h1>
                    <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <RxCross2 className='text-[30px]' /> : <Menu size={30}></Menu>
                        }
                    </div>
                    <img src={logo} className='w-8 h-8' alt="logo" />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='hidden lg:inline'>
                        <ul className='flex items-center gap-2'>
                            <NavLink to={'/'} className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:text-blue-500 hover:border-blue-500'><li>Home</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:text-blue-500 hover:border-blue-500'><li>All Coupons</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:text-blue-500 hover:border-blue-500'><li>Daily Offers</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:text-blue-500 hover:border-blue-500'><li>Contact</li></NavLink>
                            <NavLink className='pt-8 pb-6 px-4 border-b-8 border-transparent hover:text-blue-500 hover:border-blue-500'><li>Blog</li></NavLink>
                        </ul>
                    </div>
                    <div className='py-2'>
                        {/* user avatar and actions */}
                        {
                            user &&
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button">
                                        {
                                            // if guest user
                                            user?.isAnonymous ?
                                                <div className="avatar avatar-online">
                                                    <div className="w-10 rounded-full">
                                                        <img src={anonymouse} />
                                                    </div>
                                                </div>
                                                :
                                                // if google user
                                                <div className="avatar avatar-online">
                                                    <div className="w-10 rounded-full">
                                                        <img src={user.photoURL} />
                                                    </div>
                                                </div>
                                        }

                                    </div>
                                    {/* actions */}
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-40 mt-7">
                                        {
                                            !user?.isAnonymous && <Link to={'/addcoupon'}><li className='py-2 rounded px-4 my-1 bg-blue-500  font-semibold text-white'>Add Coupon</li></Link>
                                        }
                                        <button onClick={handleLogout} className='py-2 rounded px-4 my-1 bg-blue-500  font-semibold text-white text-left'>Log out</button>
                                    </ul>
                                </div>
                        }
                    </div>
                </div>
            </div>
            {/* navbar for small device */}
            <div className={`bg-blue-500 ${isOpen ? 'inline-block' : 'hidden'} lg:hidden w-full`}>
                <ul className='flex flex-col gap-2 items-center py-2 text-white'>
                    <Link to={'/'} className='py-2 w-40 text-center border-l-8 border-transparent hover:border-white'><li>Home</li></Link>
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