import React,{Component} from 'react';

class GoogleMap extends Component{
  //There is already a reference in index.html
  //<script src="https://maps.googleapis.com/maps/api/js"></script>

//Called after component is rendered
  componentDidMount(){

    // Embedded google map
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat:this.props.lat,
        lng:this.props.lon  // lng is from google, lon is from Open Weather
      }
    });
  }

  render(){
    // ref= direct reference to html element to the page
    // this.ref.map
    return <div ref="map"/>
  }

}

export default GoogleMap;
