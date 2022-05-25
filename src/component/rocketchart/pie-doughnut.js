import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import randomColor from "randomcolor";

const Options = {
    plugins: {
        title: {
            display: true,
            text: 'Cost comparison',
            color:randomColor(),
            font: {
                size:15
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
        }
        }
    }

}

export default function DoughnutChart({ Dchartdata }){
    return(
        <div>
            <Doughnut data = {Dchartdata} options={Options}/>
        </div>
    );


};