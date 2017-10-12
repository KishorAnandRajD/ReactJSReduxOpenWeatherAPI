import React,{Component} from 'react';

import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{


  renderWeatherDetails(cityData){
    const cityname=cityData.city.name;

    // check for cityData.list in console.log to know the property drilldown
  const citytemp=cityData.list.map(weather=>weather.main.temp);// Returns weather array for the city
    /*
     [295.21, 296.96, 295.56, 296.01, 294.005, 293.42, 293.246, 293, 293.436, 293.926, 294.34, 295.921, 296.095, 295.661, 293.356, 292.275, 293.598, 295.773, 298.621, 298.404, 296.843, 294.674, 293.058, 291.58, 293.683, 296.452, 298.662, 298.779, 296.419, 294.039, 292.956, 292.76, 295.385, 298.64, 299.971, 298.028]
     */
    console.log("citytemp:"+citytemp);

    const citypressure=cityData.list.map(weather=>weather.main.pressure);// Returns pressure array for the city
    const cityhumidity=cityData.list.map(weather=>weather.main.humidity);// Returns humidity array for the city

    /*const lon=cityData.city.coord.lon;
    const lat=cityData.city.coord.lat; */
    // OR
    const {lon,lat}=cityData.city.coord;
/*
Instead of multiple Sparklines component, create a component and use it here
<td>
  <Sparklines height={120} width={180} data={citytemp}>
    <SparklinesLine color="red"/>
  </Sparklines>
</td>
<td>
  <Sparklines height={120} width={180} data={citypressure}>
    <SparklinesLine color="green"/>
  </Sparklines>
</td>
<td>
  <Sparklines height={120} width={180} data={cityhumidity}>
    <SparklinesLine color="black"/>
  </Sparklines>
</td>

TO

<Chart citytempdata={citytemp} colorchart="orange" />
<Chart citytempdata={citypressure} colorchart="green" />
<Chart citytempdata={cityhumidity} colorchart="black" />

*/
    return(
      <tr key={cityname}>

        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
            <Chart citydata={citytemp} colorchart="orange" units="K"/>
        </td>
        <td>
            <Chart citydata={citypressure} colorchart="green" units="hPa" />
        </td>
        <td>
            <Chart citydata={cityhumidity} colorchart="black" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa) </th>
            <th> Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeatherDetails)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  //return {weather: weather} ;//weather - is a reducer
  // (OR)
  return {weather};// ES6 syntax
}

export default connect (mapStateToProps)(WeatherList)
