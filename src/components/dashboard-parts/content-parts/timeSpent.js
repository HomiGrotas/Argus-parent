import '../../../css/dashboard/content-parts/timeSpent.css'
import ParentContext from '../../utils/parentHook';

import Chart from 'react-apexcharts'
import React, { useContext } from "react";


const NoChildrenPopup = () =>
 {
   return (
     <div id='noChildrenPopup'>
       <span>
        Oops! It seems you have no children registered. <br></br><br></br>
        In order to register your children, follow the instructions on the 'First steps' section on the right
       </span>
     </div>
   );
 }

const GraphBar = () => 
{
      const [parent, ] = useContext(ParentContext);
      const categories = parent ? parent.children.map(child=> child.nickname) : ["Children not loaded"];
      const hours = parent ? parent.children.map(child=> child.time_spent) : [-1];
      console.log("hours", hours);

      const state = {
        options: {
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "100%",
              fontFamily: "Arial",
              fontWeight: "100"
            }
          },
          title: {
            text: "Usage Hours",
            align: "center",
            style: {
              fontSize:  '30px',
              fontWeight:  'normal'
            }
          },

          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,

            }
          },
          sparkline: {
            enabled: true
          },
          xaxis: {
            categories: categories,
            labels: {
              style: {
                fontSize: '18px',
                fontWeight: 500,
              },
            }
          },
          yaxis:{
            tooltip: {
              enabled: false
            },
            labels: {
              style: {
                fontSize: '18px',
                fontWeight: 500,
              },
            }
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
              {parent && parent.children.length === 0 && <NoChildrenPopup/>}
              <Chart
                id="chart"
                height="100%"
                options={state.options}
                series={state.series}
                type="bar"
                background-color="green"
                color="black"
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