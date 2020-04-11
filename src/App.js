import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Wrapper from './componets/Wrapper';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
