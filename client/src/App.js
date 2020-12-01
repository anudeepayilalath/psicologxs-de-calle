import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'

import './App.css';




const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar/>
        <Footer/>

        <Route path="/" exact component={Home} />

      </div>
    </Router>
  )
}

export default App;
