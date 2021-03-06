import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Display from './components/Display';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/style.css'


function App() {

  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div>
      <Navbar  setCurrentPage={setCurrentPage}/>
      <Display currentPage={currentPage}/>
      <Footer/>
    </div>
  );
}

export default App;
