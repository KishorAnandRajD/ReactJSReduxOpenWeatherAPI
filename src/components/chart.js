import React from 'react';
// for Graphs and help   https://github.com/borisyankov/react-sparklines
// npm install --save react-sparklines
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  // Find the average(sum/length) and round it off
  return _.round(_.sum(data)/data.length);
}

export default (props)=>{
  return(
    <div>
      <Sparklines height={120} width={180} data={props.citydata}>
        <SparklinesLine color={props.colorchart}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.citydata)}  {props.units}</div>
    </div>
  );
}
