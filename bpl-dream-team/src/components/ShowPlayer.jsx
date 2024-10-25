import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const ShowPlayer = ({show,handleDelete}) => {
    console.log(show)
    return (
        <div className='mb-4'>
              <div className='flex justify-between p-4 border rounded-lg'>
                <div className='flex '>
                    <div className='mt-1 mr-4'><img className='w-20 rounded-xl' src={show.image} alt="" /></div>
                    <div>
                        <div className='font-bold text-xl'>{show.name}</div>
                        <div>{show.role}</div>
                        <div>Price: ${show.biddingPrice}</div>
                    </div>
                </div>
                <div className='text-red-600 mt-4'>
                 <button onClick={()=>handleDelete(show)}><RiDeleteBin6Line /></button>
                </div>
             </div>
        </div>
    );
};

export default ShowPlayer;