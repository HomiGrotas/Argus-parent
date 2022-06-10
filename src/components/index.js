import React from "react";

// noinspection ES6CheckImport
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from "./home";
import Register from "./register";
import NotFound from "./notFound";
import Login from "./login";
import Dashboard from './dashboard';
import BlockedApps from "./blockedApps";
import BlockedWebsites from "./blockedWebsites";
import TimeLimit from "./timeLimit";
import Help from "./help";


const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route path='*' element={<NotFound/>} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/blockedWebsites' element={<BlockedWebsites/>} />
                <Route path='/blockedApps' element={<BlockedApps/>} />
                <Route path='/timeLimit' element={<TimeLimit/>} />
                <Route path='/help' element={<Help/>} />
            </Routes>
        </Router>
    );
};

export default Webpages;
