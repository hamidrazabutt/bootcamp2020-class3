import React from 'react';
import './App.css';
import Dinner from './dinner.js'

function App() {
  return (
    <div className="App">
      {/* <Dinner></Dinner> */}
      <Dinner dishName="Chiken Karahi" sweetDish="Sheer Khurma"/>
      <hr/>
      <Dinner dishName="Mutton Karahi" sweetDish="Halwa"/>
      <hr/>
      <Dinner dishName="Beef Kabab" sweetDish="Jaleebi"/>
    </div>
  );
}

export default App;
