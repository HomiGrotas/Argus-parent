import '../../../css/dashboard/content-parts/overview.css'
import ParentContext from '../../utils/parentHook';
import React, { useContext, useState } from 'react';
import ChildRegistrationAPI from '../../../api/ChildRegistrationAPI';
import Auth from '../../utils/auth';


const MyChildren = () => {
    const [parent, ] = useContext(ParentContext);
    const auth = Auth.GetAuth();
    

    async function copyToken() {
        /* Get the text field */
        const token = await ChildRegistrationAPI.get(auth.e, auth.p, new Object());
        console.log(token)
      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(token);
      
        /* Alert the copied text */
        alert("Copied Token to your clipboard :)\nNow, Send this token to your child for his registration process");
      }

    return (
        <div id='myChildren'>
            <div id="childrenList">
                <div id='myChildrenTitle'>
                    <p>My Children</p>
                </div>
                <div id='flexedChildren'>
                    <div id="childrenLeft">
                        <ul>
                            { parent != null && parent.children.map( child =>
                                    <li key={child.id}>
                                        {child.nickname}<span className='dot' style={{backgroundColor: child.connected ? "green" : "red"}}></span>
                                    </li>
                                )
                            }
                            { parent != null && parent.children.length ===0 &&
                                <label>- No Children -</label>
                            }
                        </ul>
                    </div>
                    <div id='AddChildRight'>
                        <div id='childrenOnInfo'>
                            <span>Online<span className='dot' style={{backgroundColor: "green"}}></span></span>
                            <br></br>
                            <span>Offline<span className='dot' style={{backgroundColor: "red"}}></span></span>
                        </div>
                        <div id='AddChildDiv'>
                                <div id='AddChildLabel'>
                                    <span>Add Child</span>
                                </div>
                                <div id='AddChildDivFunc'>
                                    <input id="GetToken" className="blockButton btn btn-primary" type="submit" value="Copy Token to Clipboard!" onClick={copyToken}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const Overview = () => {
    return (
        <div className="Section" id="Overview">
            <MyChildren/>
        </div>
    );
}


export default Overview;