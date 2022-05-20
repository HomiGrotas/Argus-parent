import "../../css/dashboard/content.css"

import Overview from "./content-parts/overview";
import Popularity from "./content-parts/popularity";
import TimeSpent from "./content-parts/timeSpent";
import WebTrafficGraph from "./content-parts/webTrafficGraph";


const Content =() => 
{
    return (
        <div className="DashboardContent">
            <TimeSpent/>
            <Popularity/>
            <Overview/>
            <WebTrafficGraph/>
        </div>
    );
}

export default Content;