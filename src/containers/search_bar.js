import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state={searchTerm:''};// Initialize component level state value
    this.onSearchTermInputChange=this.onSearchTermInputChange.bind(this);// bind for all methods used with 'this.' in this component whenever there is a callback
    this.onFormSubmit=this.onFormSubmit.bind(this);// bind to use the function from action
  }

  // Custom method when text input is changed in the Search Textbox
  onSearchTermInputChange(event){
    console.log(event.target.value);
    this.setState({searchTerm:event.target.value});
  }

  // On submit click or Enter press
  onFormSubmit(event){
    console.log("Submit button clicked");
    event.preventDefault();// Don't submit the form by default. Else a POST request is submitted by default and page is refreshed

    // Fetch the Weather data by firing Action to Action creator
    this.props.fetchWeather(this.state.searchTerm); // Pass 'searchTerm' to Action Creator function
    this.setState({searchTerm:''}); // Clear the State 'searchTerm' after submit
  }

  render(){
    return (
      //The reason we have gone for <form> instead of <div> is..
      //  <div> - we have to write 2 event handlers(one on click of Submit buttom and other on pressing the 'Enter' key)
      // <form> - only 1 event hander one click of Submit button. Form by default handles Enter key event
      // So, whenever there is a User input and button, always use Form element
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onSearchTermInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// Bind the Action Creator to dispatch
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

// Since there are no props to match with state(mapStateToProps), we have given 'null' in first argument
export default connect (null,mapDispatchToProps)(SearchBar);
