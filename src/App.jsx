import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Error from './pages/Error';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Service' element={<Service />}/>
        <Route path='*' element={<Error />}/>
        </Routes> 
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
