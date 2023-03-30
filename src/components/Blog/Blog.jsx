import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {

    const { blogTitle, blogCover, authorName, authorImage, publishedDate, readTime } = props.blog;

    const published = publishedDate
    return (
        <div>

            <div className='mt-8'>
                <img src={blogCover} className='rounded-md w-full h-96' />
            </div>

            <div className='flex justify-between items-center mt-4'>

                <div className='flex justify-between items-center gap-2'>
                    <div>
                        <img src={authorImage} className='h-16 w-16 rounded-full'/>
                    </div>
                    <div>
                        <p>{authorName}</p>
                        <p>{published}</p>
                    </div>
                </div>
                <div>
                    <p>{readTime} mins read <FontAwesomeIcon icon={faBookmark}/></p>
                </div>

            </div>

            <div className='mt-4'>
                <h1 className='text-4xl'>{blogTitle}</h1>
                <p className='mt-4'>#programming #codding</p>
                <p className='mt-4 mb-4'>Mark as read</p>
                <hr className='border-2'/>
            </div>

        </div>
    );
};

export default Blog;