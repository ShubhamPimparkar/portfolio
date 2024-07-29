import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Navigate } from 'react-router-dom';
import HomeComp from './Component/HomeComp';
import ProjComp from './Component/ProjComp';
import ContactComp from './Component/ContactComp';

import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    // <div className='maindiv' style={{ backgroundImage: `url(${bckg1})` }}>
      <div >
      <Header />
      <Routes>
        <Route path='/' element={<HomeComp />}></Route>
        <Route path='/about' element={<HomeComp />}></Route>
        <Route path='/project' element={<ProjComp />}></Route>
        <Route path='/contact' element={<ContactComp />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
