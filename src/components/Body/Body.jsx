import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Body = () => {

    const [blogs, setBlogs] = useState([])
   
    useEffect(()=>{
        fetch('blogsData.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='mt-4 w-11/12 mx-auto'>
            <div className='grid grid-cols-4 gap-2'>
                <div className='col-span-3'>
                    {
                        blogs.map(blog=><Blog blog={blog}></Blog>)
                    }
                </div>
                <div className=''>
                    <div className='border-2 rounded mt-8 p-4'>
                        <h1 className='text-center'>Spent time on read : 177 min</h1>
                    </div>
                    <div className='border-2 rounded mt-4 p-4'>
                        <h1 className=''>Bookmarked Blogs:</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quae alias laudantium voluptas necessitatibus, eum quaerat voluptatibus asperiores quos eaque?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;