import React, { Component } from "react";
import data from "../../data.json";
import randomColor from "randomcolor";
import "./Allrocket.css";
class rocket extends Component {
    state = {
        data,
        filteredData: data.rockets
      };
    
      _handleSearchChange = e => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
    
        this.setState(prevState => {
          const filteredData = prevState.data.rockets.filter(el =>
            el.name.toLowerCase().includes(lowercasedValue)
          );
    
          return { filteredData };
        });
      };
    
  render() {
    const { filteredData } = this.state;
    return (
      <div className="main-class">
        <div className="search-class"><input className="search-box" onChange={this._handleSearchChange} placeholder="Search rocket by name"/></div>
        {filteredData.length==0 &&(<div style={{textAlign:"center"}}><h3 style={{color:randomColor()}}>Not available || Not exist</h3> <br/> <h3 style={{color:randomColor()}}>"||" Only programers can understand :&#41;</h3></div>)}
        <div className="all-rockets">

          {filteredData.map((rock) => (
            <div className="rocket-btn">
              <div className="rocket-img">
                <img src={require("../" + rock.path)} alt="Not available" />
              </div>
              <div className="rocket-info">
                <p> Name = {rock.name+ " "+rock.version}</p>
                <p> country = {rock.country}</p>
                <p> Rocket-family = {rock.family}</p>
                <p> Manufacturer = {rock.manufacturer}</p>
                <p> Cost = {rock.cost == -1 ? "Not-available" : rock.cost + "$"}</p>
                <p> Launch date = {rock.date}</p>
                <p> height = {rock.height + " m"}</p>
                <p> Payload to LEO = {rock.payload_leo== -1 ? "Not-available" : rock.payload_leo + "kg"}</p>
                <p> Payload to GTO = {rock.payload_gto== -1 ? "Not-available" : rock.payload_gto + "kg"}</p>
                <p> payload_type = {rock.payload_type}</p>
                <p> Type = {rock.type}</p>
                <p style={rock.status=="Active"?{color:"green"}:rock.status=="In Development"?{color:"blue"}:rock.status=="Cancelled"?{color:"brown",textDecoration: "line-through"}:{color:"red"}}> Status = {rock.status}</p>
                <div className="btn12"><a  target="_blank" href={rock.wikipedia}>Wikipedia</a></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default rocket;
