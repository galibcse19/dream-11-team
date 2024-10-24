import React from 'react';
import logo from "../assets/logo.png"
import coinImg from "../assets/coin.jpg"

const Nav = () => {
    const links = <>
       <li><a>Home</a></li>
       <li><a>Fixture</a></li>
       <li><a>Teams</a></li>
       <li><a>Schedules</a></li>
    </>
    return (
        <div className='lg:mx-40 md:mx-10 mx-2'>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                     {links}
                     <button>
                    <div className='flex justify-center align-center'>
                        <div className='mt-1 font-bold'>0</div>
                        <div className='mt-1 ml-1 mr-2 font-bold'>Coin</div>
                        <img className='w-8' src={coinImg} alt="" />
                    </div>
                </button>
                </ul>
                
                </div>
                <a className="btn btn-ghost text-xl"><img className='lg:w-16 md:w-12 w-8' src={logo} alt="" /></a>
            </div>
            
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {links}
                </ul>
                {/* <a className="btn">Button</a> */}
                {/* <button><span>0</span>Coin <img className='w-10' src={coinImg} alt="" /></button> */}
                <button className='px-4 py-2 border rounded-lg'>
                    <div className='flex justify-center align-center'>
                        <div className='mt-1 font-bold'>0</div>
                        <div className='mt-1 ml-1 mr-2 font-bold'>Coin</div>
                        <img className='w-8' src={coinImg} alt="" />
                    </div>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Nav;