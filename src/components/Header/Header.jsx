import React from 'react';

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center w-11/12 mx-auto my-2'>
                <div className=''>
                    <h1 className='text-4xl font-bold'>Developers Cafe</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <a href='/details' className='px-8'>Details</a>
                    <a href='/pricing' className='px-8'>Pricing</a>
                    <a href='/contact' className='px-8'>Contact</a>
                    <img src="../../../public/architect.png" className='object-cover h-16 w-16 border rounded-full' />
                </div>
            </div>
        </>
    );
};

export default Header;