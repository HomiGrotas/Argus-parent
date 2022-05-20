import '../../../css/dashboard/content-parts/overview.css'
import { parent } from '../../utils/parentInfo';

import React from 'react';

const MyChildren = () => {
    return (
        <div id='myChildren'>
            {
                parent? 
                    parent.children.map((child) => {
                        <span>1</span>
                        }
                    )
                : <span>Parent is not loaded</span>
            }
        </div>
    );
}

const RecentActivities = () => {
    return (
        <div id="recentActivities">
        
        </div>
    );
}

const Overview = () => {
    return (
        <div className="Section" id="Overview">
            <MyChildren/>
            <RecentActivities/>
        </div>
    );
}


export default Overview;