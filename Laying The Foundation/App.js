import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './images/react-logo.png';
import userIcon from './images/user.png';
import searchIcon from './images/magnifying-glass.png';

const root = ReactDOM.createRoot(document.getElementById("root"));
// //const heading = <h1 className='head-el' tabIndex='5'>HellO jsx</h1>;
// const HeadingComponent = () => <h1>Hello I am a React functional Component</h1>;
// const Heading5 = () => <h5>I am heading5 component</h5>;
// const number = 1000;
// const el = <span>hello</span>;
// const divEl = <div>{el}<p> I am a div {8*4}</p><Heading5/> </div>;
// const Title = () => (<div id='container'>
//     <HeadingComponent/>
//     <HeadingComponent></HeadingComponent>
//     {HeadingComponent()}
//     <h2>Hello The above is component composition</h2>
//     <h3>{number-500}</h3>
//     {divEl}
// </div>);
const logo = <img src = {reactLogo} width = {'2.5%'} height={'37'}/> ;
const icon = <img src = {userIcon} width = {'2.7%'} height={'40'}/>;
const search = <button className='searchBtn'><img src = {searchIcon} width = {'80%'} height={'40'}/></button>;
const searchInput = (<input type='text' className='searchInp'/>);
const Title = () => 
(<div className='container'>
{logo}{searchInput}{search}{icon}
</div>);
root.render(<Title/>);