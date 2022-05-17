import Auth from './utils/auth';
import Login from './login';

import React from 'react'

const Dashboard = () => {
    return (
        Auth.GetAuth() != null?
        <div>
            <h1>Dashboard</h1>
        </div>
        :
        Login()  
    );
};
export default Dashboard;