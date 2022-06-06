import Auth from './utils/auth';
import ParentContext from './utils/parentHook'
import DashboardNavbar from './dashboard-parts/navbar';
import Content from './dashboard-parts/content';
import "../css/dashboard/dashboard.css"
import Parent from '../api/parent';

import React from 'react';
import {useState} from 'react'
import {useNavigate} from "react-router-dom";


async function loadParent(email, password, setParent, setErrorPreview){
    if (email != null && password != null){
        const resp = await Parent.get(email, password, setErrorPreview);
        console.log(resp);
        setParent(JSON.parse(resp));
        console.log("succesfully loaded parent");
    }
}

const Dashboard = () => {
    const [errorPreview, setErrorPreview] = useState('');
    const navigate = useNavigate();
    const auth = Auth.GetAuth();
    const [parent, setParent] = useState(null);


    React.useEffect(() => {
        console.log("checking auth...");
            if (auth == null){
                navigate('/login')
            }else{
                loadParent(auth.e, auth.p, setParent, setErrorPreview);
            }
        }, []
    )

    return (
        <ParentContext.Provider value={[parent, setParent]}>
            <div id="dashboard">
                <DashboardNavbar/>
                <Content/>
            </div> 
        </ParentContext.Provider>
    );
};
export default Dashboard;