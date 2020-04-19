import React from "react";
import "./style.css";
import robb from '../../assets/robb-stark.jpg'
import joffrey from '../../assets/joffrey.jpg'
import euron from '../../assets/euron.jpg'
import stannis from '../../assets/stannis.jpg'
import balon from '../../assets/balon.jpg'

export default function BattleCard({ warData }) {
  const { name, attacker_king, defender_king, attacker_1, defender_1 } = warData;
  var attacker= "", defender="", attacker_img="", defender_img=""
  attacker_king === "" ? attacker = attacker_1: attacker = attacker_king;
  defender_king === "" ? defender = defender_1: defender = defender_king;
  
  switch (attacker) {
    case "Joffrey/Tommen Baratheon":
      attacker_img = joffrey;
      break;
    case "Robb Stark":
      attacker_img = robb;
      break;
    case "Balon/Euron Greyjoy":
      attacker_img = balon;
        break;
    case "Stannis Baratheon":
      attacker_img = stannis;
          break;
    default:
      attacker_img = robb;
  }

  switch (defender) {
    case "Joffrey/Tommen Baratheon":
      defender_img = joffrey;
      break;
    case "Robb Stark":
      defender_img = robb;
      break;
    case "Balon/Euron Greyjoy":
      defender_img = balon;
        break;
    case "Stannis Baratheon":
      defender_img = stannis;
          break;
    default:
      defender_img = euron;
  }

  console.log('attacker image',attacker_img);

  return (
    <div className="card-layout-container" style={{flexDirection:'row', flexShrink: 1}}>
    <div className="card-container">
      <div className="card-styling">
      <div className="card-header bg-transparent border-success">
      <p style={{marginTop: "20px", color: "#AFEEEE" }}> <b> TONIGHT'S</b></p>
      <h1 className="card-title">{name.toUpperCase()}</h1>
      </div>
      <div className="fighter-name-container" >
        <div className="fighter-description">
          <h3>Attacker</h3>
          <img src={attacker_img} alt="attacker_image" className="fighter-image"/>
          <p className="attacker-name">{ attacker.toUpperCase() } </p> 
        </div>
        <div className="fighter-description">
          <h3>Defender</h3>
          <img src={defender_img} alt="defender_image" className="fighter-image"/>
          <p className="defender-name">{defender.toUpperCase()}</p>
        </div>
        
      </div>
      <div className="card-footer">
        <button className="fight-btn">Start Fight</button>
        </div>
    </div>
    </div>
    </div>
  );
}
