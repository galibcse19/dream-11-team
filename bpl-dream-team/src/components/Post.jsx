import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";

const Post = ({post}) => {
    console.log(post);
    const {country,name,image,role,battingType,bowlingType,biddingPrice}= post;
    return (
        <div>
           <div className="card glass w-96">
             <div className='p-4'>
                <img className='w-full h-48 border rounded-lg' src={image} alt="" />
                <div className='flex mt-4'>
                    <div className=' mt-1 font-bold text-2xl'>< CgProfile /></div>
                    <div className='ml-4 font-bold text-2xl'>{name}</div>
                </div>
                <div className='flex justify-between my-2'>
                    <div className='flex mt-4'>
                        <div className=' mt-2 font-bold text-xl'><FaFlag /></div>
                        <div className='ml-4 text-xl'>{country}</div>
                    </div>
                    <div className='mt-4'>
                        <button className='border rounded-lg px-2 py-1'>{role}</button>
                    </div>
                </div>
                <hr />
                <div className='font-bold text-xl my-2'>
                    Rating
                </div>
                <div className='flex justify-between my-2 -ml-4'>
                    <div className='mt-4'>
                        <div className='ml-4 text-xl font-bold'>{battingType}</div>
                    </div>
                    <div className='mt-4'>
                        <div className='ml-4 text-xl'>{bowlingType}</div>
                    </div>
                </div>
                <div className='flex justify-between my-2 -ml-4'>
                    <div className='mt-4'>
                        <div className='ml-4 text-xl font-bold'>Price: ${biddingPrice}</div>
                    </div>
                    <div className='mt-4'>
                        <button className='border rounded-lg px-2 py-1'>Choose Player</button>
                    </div>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Post;