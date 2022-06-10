import "../../css/dashboard/content.css"

import Overview from "./content-parts/overview";
import PopularitySection from "./content-parts/popularity";
import TimeSpent from "./content-parts/timeSpent";


const Content =() => 
{
    return (
        <div className="DashboardContent">
            <div id="left">
                <TimeSpent/>
            </div>
            <div id="right">
                <PopularitySection/>
                <Overview/>
            </div>

        </div>
    );
}

export default Content;