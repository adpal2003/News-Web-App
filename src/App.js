import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
       <Navbar />
       <News />
    </>
  )
}

export default App;
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//       <Navbar/>
//       <News pageSize={5}/>

//       </div>
//     )
//   }
// }


















