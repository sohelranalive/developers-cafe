import React from 'react';
import architectImage from '../../../public/architect.png'


const Header = () => {
    return (
        <>
            <div className='md:flex justify-between items-center w-11/12 mx-auto my-2'>
                <div className='py-2'>
                    <h1 className='text-4xl font-bold'>Developers Cafe</h1>
                </div>
                <div className='flex justify-start items-center py-2'>
                    <a href='/details' className='pe-8'>Details</a>
                    <a href='/pricing' className='pe-8'>Pricing</a>
                    <a href='/contact' className='pe-8'>Contact</a>
                    <img src={architectImage} className='object-cover h-12 w-12 border rounded-full' />
                </div>
            </div>
        </>
    );
};

export default Header;