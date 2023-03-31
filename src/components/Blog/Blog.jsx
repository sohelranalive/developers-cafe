import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Blog = (props) => {
    const { blogTitle, blogCover, authorName, authorImage, publishedDate, readTime, id, tags } = props.blog;

    const handleBookmark = props.handleBookmark;
    const readHandler = props.readHandler;

    return (
        <div>

            <div className='mt-8'>
                <img src={blogCover} className='rounded-md w-full h-96' />
            </div>

            <div className='flex justify-between items-center mt-4'>

                <div className='flex justify-between items-center gap-2'>
                    <div>
                        <img src={authorImage} className='h-16 w-16 rounded-full' />
                    </div>
                    <div>
                        <p>{authorName}</p>
                        <p className='opacity-50'>{publishedDate}</p>
                    </div>
                </div>
                <div>
                    <p className='opacity-50'>{readTime} mins read <span onClick={() => handleBookmark(id)}><button><FontAwesomeIcon icon={faBookmark} /></button></span></p>
                </div>

            </div>

            <div className='mt-4'>
                <h1 className='text-4xl'>{blogTitle}</h1>
                <p className='mt-4'>
                    {
                        tags.map(tag => <span className='mt-4 opacity-50'>#{tag} </span>)
                    }
                </p>
                <button className='mt-4 mb-4 underline text-blue-700' onClick={() => readHandler(id)}>Mark as read</button>
                <hr className='border-2' />
            </div>
        </div>
    );
};

export default Blog;