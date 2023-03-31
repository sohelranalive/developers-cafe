import React from 'react';

const QandA = () => {
    return (
        <div className='mt-4 mb-8 w-11/12 mx-auto'>
            <div className='md:grid grid-cols-4 gap-4'>
                <div className='col-span-3'>
                    <h1 className='text-3xl underline'>Question answer Section:</h1>
                    <br />
                    <h1 className='text-2xl'>Q1: Difference between props and state</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolorem ad tempore accusantium harum quae tempora sed, voluptatem nam id quasi adipisci aperiam velit minima at aspernatur eius laborum porro!</p>
                    <br />
                    <h1 className='text-2xl'>Q2: How does useState actually works?</h1>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam facilis aspernatur atque, totam neque placeat soluta quidem magni doloremque perferendis eligendi ratione nam, a ex pariatur praesentium exercitationem molestiae.</p>
                    <br />
                    <h1 className='text-2xl'>Q3: Purpose of useEffect other than fetching data !</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, aperiam odio ipsa officia sapiente soluta omnis velit, officiis consectetur rem quaerat quod quidem ex, exercitationem tempora. Vitae, praesentium molestias.</p>
                    <br />
                    <h1 className='text-2xl'>Q4: How Does React work?</h1>
                    <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ea. Error perspiciatis deserunt facilis quis aut odio sapiente libero cum iure tempora molestias consequuntur dicta esse quisquam facere dolorum ab, aspernatur, eligendi, sit repudiandae consectetur dolor necessitatibus distinctio? Itaque nam blanditiis minima possimus adipisci odio?</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default QandA;