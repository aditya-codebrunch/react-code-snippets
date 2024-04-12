import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'hello world from react');
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading);


const parent = React.createElement('div',
    { id: 'parent' },
    [React.createElement('div',
        { id: 'child1' },
        [
            React.createElement('h1', {}, 'hello I am a h1 tag of child 1'),
            React.createElement('h2', {}, 'hi I am a h2 tag of child 1')
        ]
    ),
    React.createElement('div',
        { id: 'child2' },
        [
            React.createElement('h1', {}, 'hello I am a h1 tag of child 2'),
            React.createElement('h2', {}, 'hello I am a h2 tag of child 2')
        ]
    )]    
);
console.log(parent);
root.render(parent);