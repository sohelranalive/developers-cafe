import React from 'react';

const Header = () => {
    return (
        <>
            <div className='bg-white grid grid-cols-5 gap-4 items-center w-11/12 mx-auto my-2'>
                <div className='col-span-3'>
                    <h1 className='text-5xl font-bold'>Developers Cafe</h1>
                </div>
                <div className='justify-self-end text-2xl'>
                    <a href='/details' className='px-8'>Details</a>
                    <a href='/pricing' className='px-8'>Pricing</a>
                    <a href='/contact' className='px-8'>Contact</a>
                </div>
                <div className='justify-self-end'>
                    <img src="../../../public/architect.png" className='object-cover h-16 w-16 border rounded-full' />
                </div>
            </div>
        </>
    );
};

export default Header;