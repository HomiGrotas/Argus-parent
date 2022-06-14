import DashboardNavbar from './dashboard-parts/navbar';
import "../css/dashboard/blockedApps.css"
import BlockedAppsAPI from '../api/childBlockedApps';
import Auth from './utils/auth';
import Parent from '../api/parent';
import FormButton from './utils/forms';
import ChildSelect from './utils/childSelect';

import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

async function loadParent(email, password, setParent, setErrorPreview){
    const resp = await Parent.get(email, password, setErrorPreview);
    setParent(JSON.parse(resp));
}

const BlockAppUI = (props) => {
    const [blockedApp, setBlockedApp] = useState("");
    const [error, setError] = useState("");

    async function handleBlockApp(e)
    {
        e.preventDefault();
        if (!props.childID)
        {
            setError("No child selected");
            return;
        }
        if(blockedApp === "")
        {
            setError("You must enter an app name");
            return;
        }

        setError("");
        console.log("blocking " + blockedApp);
        const auth = Auth.GetAuth();
        const answer = await BlockedAppsAPI.post(auth.e, auth.p, props.childID, blockedApp, setError);
        setBlockedApp("");
        if (answer){
            props.apps[blockedApp] = "";
            props.setBlockedApps(Object.assign({}, props.apps))
        }
    }


    return (
        <div id="blockApp" onSubmit={handleBlockApp}>
            <form>
                <div>
                    <h1>Application to block</h1>
                </div>
                <div>
                    <table>
                        <tbody>
                            <FormButton type="text" placeholder="" tip="" stateHook={blockedApp} setter={setBlockedApp} hide={true}/>
                        </tbody>
                    </table>
                </div>
                <div>
                    <input id="blockAppButton" className="blockButton btn btn-primary" type="submit" value="Block App" />
                </div>
            </form>
            <label id='error'>{error}</label>
        </div>
    );
}

const BlockedAppsList = (props) => {
    let apps = []
    const auth = Auth.GetAuth();


    for (const app in props.apps)
    {
        apps.push(app);
    }


    async function removeApp(app){
        console.log("removing "+ app);
        BlockedAppsAPI.delete(auth.e, auth.p, props.childID, app, new Object());

        // remove app from list
        delete props.apps[app];
        props.setBlockedApps(Object.assign({}, props.apps));
    }

    return (
        <div id="appsList">
            <h1>Blocked Apps List</h1>
            {!props.childID && <span>Please choose a child first</span>}
            <ul>
                {apps.map(app => 
                        <li key={app} className="list-group-item"> 
                        <button className='DeleteApp btn btn-secondary' onClick={() => removeApp(app)}>X</button>
                        {app}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}


const BlockedAppsContent = (props) => {
    const [blockedApps, setBlockedApps] = useState({});
    const [childID, setChildID] = useState(null);

    async function loadChildInfo(e){
        if (e){
            setChildID(e.value)
            const auth = Auth.GetAuth();
            setBlockedApps(await BlockedAppsAPI.get(auth.e, auth.p, e.value));
        }
    }

    return (
        <div id='BlockedAppsContent'>
            <ChildSelect parent={props.parent} loadChildInfo={loadChildInfo}/>

            <div id="halfs">
                <BlockedAppsList apps={blockedApps} setBlockedApps={setBlockedApps} childID={childID}/>
                <BlockAppUI apps={blockedApps} setBlockedApps={setBlockedApps} childID={childID}/>
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
            }else{
                loadParent(auth.e, auth.p, setParent, setErrorPreview);
            }
        }, []
    )


    return (
        <div id='dashboard'>
            <DashboardNavbar/>
            <BlockedAppsContent parent={parent}/>
        </div>
    );
}

export default BlockedApps;