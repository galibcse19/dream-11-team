import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    // console.log(posts);
    return (
        <div className='lg:mx-40 md:mx-10 mx-2 mt-16 mb-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {/* <div>Posts: {posts.length}</div> */}
            {
                posts.map(post => <Post post={post} key={post.playerId}></Post> )
            }
        </div>
    );
};

export default Posts;