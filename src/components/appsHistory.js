import DashboardNavbar from './dashboard-parts/navbar';
import AppsHistoryAPI from "../api/appsHistoryAPI";
import React, { useState } from "react";
import ChildSelect from './utils/childSelect';
import Parent from '../api/parent';
import {useNavigate} from "react-router-dom";
import Auth from './utils/auth';
import "../css/dashboard/appsHistory.css"


async function loadParent(email, password, setParent, setErrorPreview){
    const resp = await Parent.get(email, password, setErrorPreview);
    setParent(JSON.parse(resp));
}

const AppsHistoryContent = (props) => 
{
    const [error, setError] = useState("");
    const [history, setHistory] = useState([]);
    const auth = Auth.GetAuth();

    async function loadChild(e)
    {
        if (e)
        {
            loadHistory(e.value)
        }
    }
    
    async function loadHistory(childID)
    {
        if (childID !== -1)
            {
                const h = await AppsHistoryAPI.get(auth.e, auth.p, childID, setError, 200);
                console.log("loaded history!")
                setHistory(h);
            }
    }

    return (
        <div id='AppsHistoryContent'>
            <ChildSelect parent={props.parent} loadChildInfo={loadChild}/>
            <div id='appsHistoryTableDiv'>
            <table>
                <tbody>
                    <tr id='columnsNames'>
                        <th>App Name</th>
                        <th>State</th>
                        <th>Blocked</th>
                        <th>Datetime</th>
                    </tr>

                    {history.length === 0 && <tr><td colSpan={4} id='NoHistory'> --- There isn't recorded history for current child ---</td></tr>}
                    {history && history.map(appHistory => 
                        
                            <tr key={appHistory.date}>
                                <td>{appHistory.app_name}</td>
                                <td>{appHistory.state}</td>
                                <td>{appHistory.blocked ? "Yes" : "No"}</td>
                                <td>{appHistory.date}</td>
                            </tr>
                        )}
                </tbody>
            </table>
            </div>
        </div>
    );
}



const AppsHistory = () => 
{
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
        <div id='AppsHistory'>
            <DashboardNavbar/>
            <AppsHistoryContent parent={parent}/>
        </div>
    );
}

export default AppsHistory;