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
        <Route path='/Rockspce' element={<Home/>}></Route>
        <Route path='/Rockspce/all-tools' element={<Alltools/>}></Route>
        <Route path='/Rockspce/contact' element={<Contact/>}></Route>
        <Route path='/Rockspce/aboutus' element={<Aboutus/>}></Route>
        <Route path='/Rockspce/rocket-tools' element={<Rockettool/>}></Route>
        <Route path='/Rockspce/space-tools' element={<Spacetool/>}></Route>
        <Route path='/Rockspce/allrocket' element={<Allrocket/>}></Route>
        <Route path='/Rockspce/rocket-comparator' element={<Comparerock/>}></Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
        <Footer></Footer>
       </BrowserRouter> 
    </div>
  );
}

export default App;
