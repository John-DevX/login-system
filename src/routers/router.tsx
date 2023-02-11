import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Login from '../components/login/Login';
import { RequireAuth } from '../contexts/auth/RequireAuth';
 const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/private' element={<RequireAuth><Dashboard/></RequireAuth>}/>
        </Routes>
    </Router>
  )
}

export default Routing;
