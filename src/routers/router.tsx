import React from 'react';
import {HashRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from '../contexts/auth/RequireAuth';
import { Home } from '../pages/Home';
import { Private } from '../pages/Private';
 const Routing = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}/>
        </Routes>
    </HashRouter>
  )
}

export default Routing;
