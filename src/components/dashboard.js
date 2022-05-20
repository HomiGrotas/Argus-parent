import Auth from './utils/auth';
import Login from './login';
import DashboardNavbar from './dashboard-parts/navbar';
import Content from './dashboard-parts/content';
import "../css/dashboard/dashboard.css"
import Parent from '../api/parent';
import {parent} from './utils/parentInfo';

import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";



const Dashboard = () => {
    const [errorPreview, setErrorPreview] = useState('');
    const navigate = useNavigate();
    const auth = Auth.GetAuth();

    React.useEffect( async() => {
        console.log("checking auth...")
        if (auth == null){
            navigate('/login')
        }
        }
    )
    
    async function loadParent(){
        if (parent == null){
            const resp = await Parent.get(auth.e, auth.p, setErrorPreview);
            parent = JSON.parse(resp);
            console.log("succesfully loaded parent");
            console.log(JSON.stringify(parent));
        }
        else{
            console.log("parent was already loaded");
        }
    }

    loadParent();

    return (
        <div id="dashboard">
            <DashboardNavbar/>
            <Content/>
        </div> 
    );
};
export default Dashboard;