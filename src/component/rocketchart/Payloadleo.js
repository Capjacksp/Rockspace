import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import randomColor from "randomcolor";


export default function PayloadLeo({data}){
    var x=[];
    var y=[];
    var arr=[]
    data.map((t)=>(
       t.payload_leo!=-1 &&(x.push(t.name+" "+(t.version!=""?t.version:"")),y.push(t.payload_leo))
    ))
    for (var i = 0; i < x.length; i++) {
      arr[i]=randomColor();
    }  



    const Linedata = {
        labels: x,
    datasets: [
      {
        label: "Payload to LEO (in kg)",
        data: y,
        backgroundColor: arr,
      },
    ],
  };
  const Options = {
    plugins: {
            responsive:true,
            animation:{
                animateScale: true,
        
        }
    }

}
    return (
       <div> <Bar data={Linedata} /></div>
    )
};
