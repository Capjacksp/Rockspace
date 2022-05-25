import React from "react";
import "../rocket-table/tablecomp.css";
import data from "../../data.json";
export default function Rockettable({Tabledata}) {
    var x;
  return (
    <div className="rocket-table">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {Tabledata.map((t) => (

              <th scope="col">
                <img src={require("../"+t.path) }/>
              </th>
            ))}
          </tr>
        </thead>
 
        <tbody>
          {Tabledata.map((e) => (
            <th>
              <td>{e.name+" "+(e.version!=""?e.version:"")+"("+e.country+")"}</td>
            </th>
          ))}
        </tbody>
      </table>
    </div>
  );
}
