import React from 'react';
import coverImg from "../assets/bg-shadow.png"
import coverMain from "../assets/banner-main.png"

const Cover = () => {
    return (
        <div className='lg:mx-40 md:mx-10 mx-2 mt-6'>
            <div
            className="hero border rounded-lg"
            style={{
                backgroundImage: `url(${coverImg})`,
                backgroundColor: "black",
            }}>
             
            <div className="hero-content text-neutral-content ">
                <div className="  text-center py-10">
                    <img className='mx-auto w-40' src={coverMain} alt="" />
                    <h1 className="my-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5">
                    Beyond Boundaries Beyond Limits
                    </p>
                    <button className="btn bg-yellow-400">Claim Free Credit</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cover;