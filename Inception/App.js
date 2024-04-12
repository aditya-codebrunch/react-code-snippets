const heading = React.createElement('h1', { id: 'heading' }, 'hello world from react');
const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement('div',
    { id: 'parent' },
    [React.createElement('div',
        { id: 'child1' },
        [
            React.createElement('h1', {}, 'hello I am a h1 tag of child 1'),
            React.createElement('h2', {}, 'hello I am a h2 tag of child 1')
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
root.render(parent);