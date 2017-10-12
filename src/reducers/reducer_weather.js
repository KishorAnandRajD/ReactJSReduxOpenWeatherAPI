import {FETCH_WEATHER}from '../actions/index'

export default function(state=[],action){

  console.log('Action received:',action);


  switch (action.type) {
    case FETCH_WEATHER:
      // state.concat will append data to the state array =>[city1,city2,city3,...] evreytime a new city search is done (We are NOT using state.push) //
      //return state.concat([action.payload.data]);// The 'data' propery from payload has the required content we need. Check the console log
      // (OR)
      console.log("ReducerWeather");
      console.log("state:"+state);
      console.log("action.payload.data:"+action.payload.data);
      //action.payload.data - contains current one array object weather details for one city for which the search was made on click of submit
      /*
      ...state  - SPREAD operator(...). append the value from action.payload.data to the 'state'. Check a sample code at the bottom.
      1. Initially the first value from payload is set to the state
      2. If another search is done, the second object is APPENDED to state. Now state contains two values
      3. If third search is done, the third object is APPENDED to state. Now state contains three values
      */

      // The return value is set to the state 'weather'
      return [action.payload.data, ...state]; // [city1,city2,city3,...]

      break;
    default:

  }

  return state;
}

/*

1.WITH SPREAD operator
function kishor(state=[]){
			state=[2,3];
     return [1,...state];
}

kishor()
// Output is
[1,2,3]

2.WITHOUT SPREAD operator
function kishor(state=[]){
			state=[2,3];
     return [1,state];
}

kishor()
// Output is
[1,[2,3]]

*/
