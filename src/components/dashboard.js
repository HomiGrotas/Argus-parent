import Auth from './utils/auth';
import Login from './login';
import DashboardNavbar from './dashboard-parts/navbar';
import Content from './dashboard-parts/content';
import "../css/dashboard/dashboard.css"

import React from 'react'

const Dashboard = () => {
    return (
        Auth.GetAuth() != null?
        <div id="dashboard">
            <DashboardNavbar/>
            <Content/>
        </div>
        :
        Login()  
    );
};
export default Dashboard;