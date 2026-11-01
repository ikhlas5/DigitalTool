// import React from 'react';

import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Cart from "../PremiumDigit/Cart/Cart";

const Navbar = ({ visitedCards }) => {
    console.log(visitedCards);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCartClick = () => {
        // console.log("Cart clicked");
        setIsCartOpen(prev => !prev);
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold color-[#101727]">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonial</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">DigiTool</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold color-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonial</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="relative cursor-pointer space-x-5" onClick={handleCartClick}>
                        <MdOutlineShoppingCart /> <span className="badge badge-xs badge-primary absolute -top-2 right-0">{visitedCards.length}</span>
                  
                    </div>
                    {isCartOpen && (
                        <div className="absolute right-0 top-10 z-50 w-96">
                            <Cart visitedCards={visitedCards} />
                        </div>
                    )}
                    <button className="btn btn-outline btn-primary  m-2">Login</button>
                    <button className="btn hidden md:block bg-linear-to-r from-blue-500 to-purple-600 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;