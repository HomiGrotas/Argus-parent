import "../../css/dashboard/content.css"

import Overview from "./content-parts/overview";
import Popularity from "./content-parts/popularity";
import TimeSpent from "./content-parts/timeSpent";


const Content =() => 
{
    return (
        <div className="DashboardContent">
            <div id="left">
                <TimeSpent/>
            </div>
            <div id="right">
                <Popularity/>
                <Overview/>
            </div>

        </div>
    );
}

export default Content;