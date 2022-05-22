import '../../../css/dashboard/content-parts/timeSpent.css'
import ParentContext from '../../utils/parentHook';

import Chart from 'react-apexcharts'
import React, { useContext } from "react";


const GraphBar = () => 
{
      const [parent, ] = useContext(ParentContext);
      const categories = parent ? parent.children.map(child=> child.nickname) : ["Children not loaded"];
      const hours = parent ? parent.children.map(child=> child.time_spent) : [-1];
      console.log("hours", hours);

      const state = {
        options: {
          chart: {
            id: "basic-bar"
          },

          xaxis: {
            categories: categories
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          }
        },
        series: [
          {
            name: "hours spent",
            data: hours
          }
        ]
      };
    
  
      return (
        <div id="HoursGraph">
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="100%"
                height="80%"
              />
        </div>
      );
}
  

const TimeSpent = () => {


    return (
        <div id='timeSpent'>
          <GraphBar/>
        </div>
    );
}

export default TimeSpent;