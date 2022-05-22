import { useState, useEffect } from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap'

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


const Brand = () =>{
    return (
        <div className='DashboardBrand'>
            <span id='DashboardTitle'>Argus</span>
            <img src="shield.png" alt="shield" id='shield'/>
        </div>
    );
}

const Menu = () => {
    return (
        <div id="Menu">
            <DropdownButton id="dropdown-basic-button" title="Main">
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
        </div>
    );
}


export default DashboardNavbar;