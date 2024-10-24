import React from 'react';
import logo from "../assets/logo.png"
import coverImg from "../assets/bg-shadow.png";
const Footer = () => {
    return (
        <div className='relative'>
         <div id='section1' className='-mb-36 relative'> 
                <div className="w-3/4 mx-auto text-center bg-cover bg-center py-20 bg-white text-black border rounded-2xl"
                    style={{ backgroundImage: `url(${coverImg})` }}>
                    <h2 className='font-bold text-2xl'>Subscribe to our Newsletter</h2>
                    <p className='my-4 opacity-70'>Get the latest updates and news right in your inbox!</p>
                    <input type="email" placeholder="Enter your email" className="p-3 w-1/3 border rounded-lg mr-2"/>
                    <button className="bg-gradient-to-r from-sky-400 to-yellow-400 text-black font-bold py-3 px-5 border rounded-lg">
                        Subscribe
                    </button>
                </div>
            </div>
        <div id='section2' className='bg-black text-white'>
            <img className='mx-auto w-32 pb-12 pt-44' src={logo} alt="" />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-40 md:mx-10 mx-2  pb-12'>
                <div>
                    <h2 className='font-bold text-2xl'>About Us</h2>
                    <p className='opacity-50 my-4'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>Quick Links</h2>
                    <ul className='opacity-50 my-4' type="circle">
                        <li><a>Home</a></li>
                        <li className='my-1'><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li className='my-1'><a>Schedules</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>Subscribe </h2>
                    <p className='opacity-50 my-4'>Subscribe to our newsletter for the latest updates.</p>
                    <input type="text" placeholder="Enter your email" className="p-3 border rounded-l-lg" />
                    <button className='bg-gradient-to-r from-sky-400 to-yellow-400 text-black font-bold p-3 border rounded-r-lg'>Subscribe</button>
                </div>
            </div>
            <div className=' opacity-50'>< hr /></div>
            <div>
                <p className='text-center py-6 opacity-50'>@2024 Your Company All Rights Reserved.GaLib</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;