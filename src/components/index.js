import React from 'react';
// noinspection ES6CheckImport
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from "./home";
import Register from "./register";
import NotFound from "./notFound";


const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route path='*' element={<NotFound/>} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </Router>
    );
};

export default Webpages;
