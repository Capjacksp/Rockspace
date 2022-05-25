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
import NotFoundPage from './component/notfoundpage/Notfoundpage';

function App() {






  return (
    <div className="App" >
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
        <Header></Header>
      <Routes>
        <Route path='/Rockspace' element={<Home/>}></Route>
        <Route path='/Rockspace/all-tools' element={<Alltools/>}></Route>
        <Route path='/Rockspace/contact' element={<Contact/>}></Route>
        <Route path='/Rockspace/aboutus' element={<Aboutus/>}></Route>
        <Route path='/Rockspace/rocket-tools' element={<Rockettool/>}></Route>
        <Route path='/Rockspace/space-tools' element={<Spacetool/>}></Route>
        <Route path='/Rockspace/allrocket' element={<Allrocket/>}></Route>
        <Route path='/Rockspace/rocket-comparator' element={<Comparerock/>}></Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
        <Footer></Footer>
       </BrowserRouter> 
    </div>
  );
}

export default App;
