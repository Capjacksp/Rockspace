import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import randomColor from "randomcolor";

export default function BarChart({ chartData }){

  const Options = {
    plugins: {
            responsive:true,
            animation:{
                animateScale: true,
        }
    }

}
  return (
    <div>
      <Bar data={chartData}
  options={Options}/>
    </div>
  );
};