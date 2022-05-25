import React, { useEffect, useState } from "react";
import BarChart from "../rocketchart/barchart";
import DoughnutChart from "../rocketchart/pie-doughnut";
import data from "../../data.json";
import Rocketcomp from "../rocket-comp/rocketcomp";
import PayloadLeo from "../rocketchart/Payloadleo";
import PayloadGto from "../rocketchart/Palyloadgto";
import randomColor from "randomcolor";
import Rockettable from "../rocket-table/tablecomp";
import '../comparerocket/comparerocket.css'
function findid(id) {
  return data.rockets.filter((item) => {
    return item.name === id;
  });
}

function Comparerock() {
  const [Svalue1, setSvalue1] = useState();
  const [Passdata, setPassdata] = useState(findid(Svalue1));
  const [inputList, setInputList] = useState([{}]);
  var arr=[];
  const [ChartData, setChartData] = useState({
    labels: findid("").map((n) => n.name),
    datasets: [
      {
        label: "Height",
        data: findid("").map((x) => x.height),
        backgroundColor: arr,
      },
    ],
  });

  const [Dchartdata, setDchartdata] = useState({
    labels: findid(Svalue1).map((n) => n.name),
    datasets: [
      {
        label: "Attendance for Week 1",
        data: findid(Svalue1).map((x) => x.cost),
        backgroundColor: arr,
      },
    ],
  });

  useEffect(() => {
    var s = findid(Svalue1);
    for (var i = 0; i < inputList.length; i++) {
      s = s.concat(findid(inputList[i]));
      arr[i]=randomColor();
    }
    arr[inputList.length+1] =randomColor();
    setPassdata(s);
    setChartData({
      labels: s.map((n) => n.name+" "+(n.version!=""?n.version:"")),
      datasets: [
        {
          label: "Height (in meter)",
          data: s.map((x) => x.height),
          backgroundColor: arr,
        },
      ],
    });

    setDchartdata({
      labels: s.map((n) => n.name+" "+(n.version!=""?n.version:"")),
      datasets: [
        {
          label: "Attendance for Week 1",
          data: s.map((x) => x.cost),
          backgroundColor: arr,
        },
      ],
    });
  }, [inputList, Svalue1]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    var list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, {}]);
  };













  return (
    <div className="Compare">
        <div className="select-box" style={{border:'5px solid'+randomColor()}}>
        <h2>Multi rocket comparetor</h2>
        <h3>You can select multiple rocket for comaresion</h3>
        <div className="select-btn">
      <select onChange={(e) => setSvalue1(e.target.value)}>
      <option>--select--</option>
        {data.rockets.map((rock1) => (
          <option value={rock1.name}>{rock1.name}</option>
        ))}
      </select>
      {inputList.map((x, i) => {
        return (

          <div className="box">
              <h2 style={{color:randomColor()}}> v/s</h2>
            <select onChange={(e) => handleInputChange(e, i)}>
                <option>--select--</option>
              {data.rockets.map((rock) => (
                <option value={rock.name}>{rock.name}</option>
              ))}
            </select>
            <div className="btn-box">
              {inputList.length !== 1 && (
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
                <button className="add-btn" onClick={handleAddClick}>
                  Add Rocket
                </button>
              )}
            </div>
          </div>
        );
      })}
      </div>
      </div>
      <div>
          <h3 style={{color:randomColor()}}>Image's</h3>
          <Rockettable Tabledata={Passdata}/>
      </div>
       
      <div>
        <br/>
         <h3 style={{color:randomColor()}}>Height comaresion</h3>
        <BarChart chartData={ChartData} />
      </div>

      <div>
        <br/>
        <span style={{color:randomColor(),fontSize:"15px",fontFamily:"cursive"}}>*Not available data will not be displayed.</span>
        <DoughnutChart Dchartdata={Dchartdata} />
      </div>
      <div>
        <br />
        <h3 style={{color:randomColor()}}>Payload capacity for Low Earth Orbit(LEO)</h3>
        <PayloadLeo data={Passdata}/>
      </div>
      <div>
        <br/>
        <h3 style={{color:randomColor()}}>Payload capacity for Geostationary Transfer Orbit(GTO)</h3>
        <PayloadGto data={Passdata}/>
      </div>
      <br/>
      <h3 style={{color:randomColor()}}>Full comaresion (In table)</h3>
      <div className="rocket-table">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col" >Name</th>
              <th scope="col" >Height(in meter)</th>
              <th scope="col" >Country</th>
              <th scope="col" >FirstLaunch</th>
              <th scope="col" >Cost</th>
              <th scope="col" >Payload(LEO)</th>
              <th scope="col" >Payload(GTO)</th>
              <th scope="col" >Payload type</th>
              <th scope="col" >Status</th>
              <th scope="col" >Wikipedia</th>
            </tr>
          </thead>
          <tbody>
            {Passdata.map((t) => (
              <tr>
                <th style={{color:randomColor()}}>{t.name}{t.version!=""?t.version:""}</th>
                <td>{t.height + "m"}</td>
                <td>{t.country}</td>
                <td>{t.date}</td>
                <td>{t.cost == -1 ? "Not-available" : t.cost + "$"}</td>
                <td>
                  {t.payload_leo == -1 ? "Not-available" : t.payload_leo + "kg"}
                </td>
                <td>
                  {t.payload_gto == -1 ? "Not-available" : t.payload_gto + "kg"}
                </td>
                <td>{t.payload_type}</td>
                <td>{t.status}</td>
                <td>
                  <a href={t.wikipedia}>{t.name}{t.version!=""?t.version:""}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="select-rock">
          <h2 style={{color:randomColor()}}>Selected rocket own by country's</h2>
          <Rocketcomp Rockdata={Passdata} ></Rocketcomp>
      </div>
      <div className="Most-rock">
          <h2 style={{color:randomColor()}}> Total rockets country's have </h2>
          <Rocketcomp Rockdata={data.rockets} ></Rocketcomp>
      </div>
     
    </div>
  );
}

export default Comparerock;
