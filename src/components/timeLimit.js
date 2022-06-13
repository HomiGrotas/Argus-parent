import DashboardNavbar from './dashboard-parts/navbar';
import "../css/timeLimit.css"
import Auth from './utils/auth';
import Parent from '../api/parent';
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Select from 'react-select'
import FormButton from './utils/forms';
import TimeLimitAPI from '../api/timeLimitAPI';


async function loadParent(email, password, setParent, setErrorPreview){
    const resp = await Parent.get(email, password, setErrorPreview);
    setParent(JSON.parse(resp));
}

const ChangeTimeLimit = (props) => 
{
    const [selectedDay, setSelectedDay] = useState("");
    const [timeLimitAmount, setTimeLimitAmount] = useState("");
    const [error, setError] = useState("");
    const auth = Auth.GetAuth();

    async function setTimeLimit(e)
    {
        e.preventDefault();
        setError("");
        if (isNaN(timeLimitAmount))
        {
            setError("Time limit must be a number")
        }
        else{
            if (await TimeLimitAPI.patch(auth.e, auth.p, setError, selectedDay, timeLimitAmount, props.childID) === 1)
            {
                var newTimeLimits = props.days;
                newTimeLimits[selectedDay] = timeLimitAmount;
                props.setDays({...newTimeLimits});
            }
        }
    }

    function setDay(e)
    {
        setSelectedDay(e.value);
        console.log(e.value);
    }

    var days = []
    for (const day in props.days)
    {
        days.push({value: day, label:day.charAt(0).toUpperCase() + day.slice(1)})
    }

    return(
        <div id='ChangeTimeLimit'>
            <h1>Change Time Limit</h1>
            <div id='Options'>
                <Select options={days}  placeholder="Day to change" onChange={setDay}/>
            </div>
            <form onSubmit={setTimeLimit}>
                <div>
                    <table>
                        <tbody>
                            <FormButton type="text" placeholder="" tip="" stateHook={timeLimitAmount} setter={setTimeLimitAmount} hide={true} value=""/>
                        </tbody>
                    </table>
                </div>
                <div>
                    <input id="setTimeLimitButton" className="btn btn-primary" type="submit" value="Set Time Limit" />
                </div>
            </form>
            <label id='error'>{error}</label>
        </div>
    );
}

const TimeLimitTable = (props) => 
{
    const days = Object.keys(props.days);
    return(
        <div id='TimeLimitTable'>
            <h1>Time Limit</h1>
            {!props.childID && <span>Please choose a child first</span>}
            <ul>
            {
            days.map(
                day => 
                    <li key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}: <span>{props.days[day]} hours</span></li>
                
            )
            }
            </ul>
        </div>
    );
}


const TimeLimitContent = (props) => {
    const options = [];
    const [childID, setChildID] = useState(null);
    const [days, setDays] = useState([]);


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
            setChildID(e.value)
            const children = props.parent.children.filter(child => child.id === e.value)
            if (children.length !== 0)
            {
                setDays(children[0].usage_limits);
            }
        }
    }

    return (
        <div id='BlockedAppsContent'>
            <div id='selectChild'>
                <Select options={options} placeholder="Please select a child" onChange={loadChildInfo}/>
            </div>

            <div id="halfs">
                <TimeLimitTable childID={childID} parent={props.parent} days={days}/>
                <ChangeTimeLimit childID={childID} parent={props.parent} days={days} setDays={setDays}/>
            </div>
        </div>
    );
}

const TimeLimit = () => {
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
            <TimeLimitContent parent={parent}/>
        </div>
    );
}

export default TimeLimit;