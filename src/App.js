import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  var sweet="Barfi";
  return (
    <div className="App">
    <Dinner dinnerItem="chicken Karahi" sweetdish="Gulab Jaman"/>
    <hr />
    <Dinner dinnerItem="chicken Biryani" sweetdish={sweet}/>
    <hr/>
    <Dinner dinnerItem="Nihari" sweetdish={sweet}/>
    </div>
  );
}

export default App;
