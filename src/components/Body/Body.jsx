import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';

const Body = () => {

    const [blogs, setBlogs] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [readMarked, setReadMarked] = useState([])

    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmark = (id) => {
        const findBookmarkedBlog = blogs.find(singleBlog => singleBlog.id === id)

        const exitedBookmark = bookmark.find(sb => sb.id === findBookmarkedBlog.id)
        if (exitedBookmark) {
            toast("This blog already added into bookmark !")
        }
        else {
            const newBookmarked = [...bookmark, findBookmarkedBlog]
            setBookmark(newBookmarked)
        }
    }

    const readHandler = (id) => {
        const getReadMarkedBlog = blogs.find(singleBlog => singleBlog.id === id)
        const newlyReadMarked = [...readMarked, getReadMarkedBlog]
        setReadMarked(newlyReadMarked)
    }

    let totalReadingTime = 0;
    for (const marked of readMarked) {
        totalReadingTime = totalReadingTime + marked.readTime;
    }

    return (
        <div className='mt-4 w-11/12 mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-3'>
                    {
                        blogs.map((blog) => <Blog
                            blog={blog}
                            handleBookmark={handleBookmark}
                            readHandler={readHandler}
                        ></Blog>)
                    }
                </div>
                <div>
                    <div className='sticky top-0'>
                        <div className='border-2 rounded border-blue-700 mt-8 p-4 text-blue-700 font-bold bg-slate-300'>
                            <h1 className='text-center'>Spent time on read : {totalReadingTime} min</h1>
                        </div>
                        <div className='border-2 rounded mt-4 p-4 bg-slate-300'>
                            <h1 className='mb-2'>Bookmarked Blogs:</h1>
                            {
                                bookmark.map(item => <p className='p-4 bg-white rounded mb-2'>{item.blogTitle}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;