import React from 'react';

const Hello = () => {
    return (
        <div className = 'dummyClass'>
            <h1> Hello Vishwas </h1>
        </div>
    );
};

//JSX
// const Hello = () => {
//     return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Vishwas!'));
// };

export default Hello;