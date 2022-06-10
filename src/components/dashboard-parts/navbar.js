import { useState, useEffect } from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import "../../css/dashboard/navbar.css"

const Clock = () =>{
    const [date, setDate] = useState(new Date());
    var today = new Date();
    var minutes = today.getMinutes();
    var time = today.getHours() + ":" + (minutes < 10 ? '0' + minutes : minutes);  
    
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);

    return (
      <span id="clock">
        {time}
      </span>
    );
  }

  const Logout = () => 
  {
    const navigate = useNavigate();

    function logout()
    {
      console.log("exit");
      localStorage.removeItem('auth');
      navigate("/");
    }

    return(
      <div id='LogoutDiv'>
          <button id='logout' className="" onClick={logout}>Logout</button>
      </div>
    );
  }


const Brand = () =>{
  const navigate = useNavigate();
    function onClick()
    {
      navigate('/dashboard');
    }

    return (
        <div className='DashboardBrand' onClick={onClick} role="button">
            <span id='DashboardTitle'>Argus</span>
            <img src="shield.png" alt="shield" id='shield'/>
        </div>
    );
}

const Menu = () => {
    return (
        <div id="Menu">
            <DropdownButton id="dropdown-basic-button" title="Menu">
                <Dropdown.Item className="dropdownItem" href="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" href="/blockedWebsites">Blocked Websites</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" href="/blockedApps">Blocked Apps</Dropdown.Item>
                <Dropdown.Item className="dropdownItem" href="/timeLimit">Time Limit</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

const DashboardNavbar =() => {
  
    return (
        <div className='DashboardNavBar'>
            <Menu/>
            <Brand/>
            <Clock/>
            <Logout/>
        </div>
    );
}


export default DashboardNavbar;