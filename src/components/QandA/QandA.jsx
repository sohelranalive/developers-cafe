import React from 'react';

const QandA = () => {
    return (
        <div className='mt-4 mb-8 w-11/12 mx-auto'>
            <div className='md:grid grid-cols-4 gap-4'>
                <div className='col-span-3'>
                    <h1 className='text-3xl underline'>Question answer Section:</h1>
                    <br />
                    <h1 className='text-2xl'>Q1: Difference between props and state</h1>
                    <p className='text-justify'>Props is used to transmit parameter through component. We can pass object, array even a function as a parameter through props. We send as many as props we want</p>
                    <p>We can define state as an collection of object. It consist two parameter, one is setter function and another one is variable where the data stored by the setter function. By using state we can update the variable value without rendering.</p>
                    <br />
                    <h1 className='text-2xl'>Q2: How does useState actually works?</h1>
                    <p className='text-justify'>useState is React Hook that allows us to add state to a functional component. It gives us an array with two values. The current state and a function to update it the current state. useState takes an initial state value as an argument and returns an updated state value whenever the setter function is called. This useState() hook allows us to create, track and update the state.</p>
                    <br />
                    <h1 className='text-2xl'>Q3: Purpose of useEffect other than fetching data !</h1>
                    <p className='text-justify'>We can use the useEffect to update any kind of changes in our code. useEffect takes a dependency parameter based on that dependency useEffect hook called. Any changes on dependency useEffect will call. If we need to do something after the rendering we can use useEffect to update the changes.</p>
                    <br />
                    <h1 className='text-2xl'>Q4: How Does React work?</h1>
                    <p className='text-justify'>React just maintains a tree and it will do efficient diff computations on the nodes. Suppose, React now has an old tree that describes what it currently looks like and a new tree that represents how the updated page should look. React must now compare these two trees and provide ReactDOM with instructions to sync anything that has changed, which results in adding items to the UI. This is How React works</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default QandA;