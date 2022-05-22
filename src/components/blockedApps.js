import DashboardNavbar from './dashboard-parts/navbar';
import "../css/dashboard/blockedApps.css"
import BlockedAppsAPI from '../api/childBlockedApps';
import Auth from './utils/auth';
import Parent from '../api/parent';

import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Select from 'react-select'


const BlockedAppsList = (props) => {
    return (
        <div>
            {props.apps ? props.apps : "No Blocked apps"}
        </div>
    );
}


const BlockedAppsContent = (props) => {
    const options = [];
    const [blockedApps, setBlockedApps] = useState();

    if (props.parent)
    {
        props.parent.children.map(
            function(child){
                options.push({value: child.id, label:child.nickname});
            }
        )
    }

    async function loadChildInfo(e){
        if (e){
            const auth = Auth.GetAuth();
            setBlockedApps(await BlockedAppsAPI.get(auth.e, auth.p, e.value));
        }
    }
    loadChildInfo();

    return (
        <div id='BlockedAppsContent'>
            <div id='selectChild'>
                <Select options={options} placeholder="Please select a child" onChange={loadChildInfo}/>
            </div>
            <div>
                <ul>
                    <BlockedAppsList apps={blockedApps}/>
                </ul>
            </div>
        </div>
    );
}

const BlockedApps = () => {
    const navigate = useNavigate();
    const [errorPreview, setErrorPreview] = useState('');
    const [parent, setParent] = useState(null);

    const auth = Auth.GetAuth();

    React.useEffect(() => {
        console.log("checking auth...")
        if (auth == null){
            navigate('/login')
        }
        }
    )

    async function loadParent(){
        const resp = await Parent.get(auth.e, auth.p, setErrorPreview);
        setParent(JSON.parse(resp));
    }
    loadParent()

    return (
        <div id='dashboard'>
            <DashboardNavbar/>
            <BlockedAppsContent parent={parent}/>
        </div>
    );
}

export default BlockedApps;