import React, { Component } from 'react'
import data from '../../data.json'

function findid(id) {
    return data.rockets.filter(item => {
        return item.name === id
      })   
}
class rocketcom extends Component{
    render(){
        return(
            <div>
                {
                    findid('Energia').map((t)=>(
                        <div>
                        <h2>Name of the rocket - {t.name}</h2>
                        <h2>Cost of the rocket - {t.cost}</h2>
                        <h2>Cost of the rocket - {t.country}</h2>
                        <h2>Cost of the rocket - {t.family}</h2>
                        <h2>Cost of the rocket - {t.height}</h2>
                        <h2>Cost of the rocket - {t.date}</h2>
                        <h2>Cost of the rocket - {t.path}</h2>
                        </div>
                        ))
                }


            </div>

        );
    }
}

export default rocketcom;