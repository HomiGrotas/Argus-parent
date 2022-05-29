import '../../../css/dashboard/content-parts/overview.css'
import ParentContext from '../../utils/parentHook';
import React, { useContext } from 'react';

const MyChildren = () => {
    const [parent, ] = useContext(ParentContext);

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
                        </ul>
                    </div>
                    <div id='childrenOnInfo'>
                        <span>Online<span className='dot' style={{backgroundColor: "green"}}></span></span>
                        <br></br>
                        <span>Offline<span className='dot' style={{backgroundColor: "red"}}></span></span>
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