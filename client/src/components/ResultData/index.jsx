import React, { Component } from 'react';
import BattleCard from '../BattleCard';
import './style.css';

export default class ResultData extends Component {
  render() {
    const { battleData } = this.props;
    console.log('from resultData',battleData);
    return (
      <div className="result-container" >
        {battleData.map((data) => <BattleCard warData={data} />)}
      </div>
    );
  }
}
