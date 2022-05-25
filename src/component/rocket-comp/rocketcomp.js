import React, { useState, useCallback, useEffect } from "react";
import data from "../../data.json";
import "./rocketcomp.css";
import BarChart from "../rocketchart/barchart";
import DoughnutChart from "../rocketchart/pie-doughnut";

import randomColor from "randomcolor";


function Rocketcomp({Rockdata}) {
  var x=[];
  var arr=[];
  const counts = {}
  Rockdata.map((t)=>(
    x.push(t.country)
  ))
  x.forEach((y)=>(counts[y] = (counts[y] || 0) + 1 ));
  for (var i = 0; i < x.length; i++) {
    arr[i]=randomColor();
  }  
  var e1 = Object.keys(counts)
  var e2 = Object.values(counts)
  const ChartData={
    labels: e1,
    datasets: [
      {
        label: "Number of rockets",
        data: e2,
        backgroundColor: arr,
      },
    ],
  }

  const option= {
    scales: {
        yAxes: [{
            ticks: {
                stepSize: 1
            }
        }]
    }
}




  return (
    <div>

      <BarChart chartData={ChartData} options={option} />
      
    </div>
  );
}

export default Rocketcomp;
