import React, { Component,useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route, Link,outlet } from "react-router-dom";
import Allrocket from './component/allrockets/Allrocket'
import Rocketcomp from './component/rocket-comp/rocketcomp'
import Rocketcom from './component/rocketcompa/rocketcom'
import BarChart from './component/rocketchart/barchart';
import Comparerock from './component/comparerocket/comparerock';
import Rockettable from './component/rocket-table/tablecomp';
import Rockettool from './component/rocket-tools/rockettools';
import Spacetool from './component/space-tools/spacetools';
import Aboutus from './component/about/about';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Header from './component/header/hearder';
import Test from './component/test/test';
import Contact from './component/contact/contact';
import data from './data.json'
import ScrollToTop from './component/scrolltotop/scrolltotop';
import Alltools from './component/alltools/alltools';

function App() {






  return (
    <div className="App" >
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
        <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all-tools' element={<Alltools/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/rocket-tools' element={<Rockettool/>}></Route>
        <Route path='/space-tools' element={<Spacetool/>}></Route>
        <Route path='/allrocket' element={<Allrocket/>}></Route>
        <Route path='/rocket-comparator' element={<Comparerock/>}></Route>
      </Routes>
        <Footer></Footer>
       </BrowserRouter> 
    </div>
  );
}

export default App;
