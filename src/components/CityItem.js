import React from "react";
import { connect } from 'react-redux'
import { removeCity } from '../actions/cities'

const CityItem = (props) => {

  const description = () => {
    return `${props.city.weather.weather[0].main}, ${props.city.weather.main.temp} degrees`
  }

  return (
    <div>
      <h3>{props.city.name}</h3>
      <p>{props.city.weather ? description() : 'Loading...'}</p>
      <button onClick={() => props.dispatch(removeCity({id: props.city.id}))}>Remove</button>
    </div>);
};
 
export default connect()(CityItem);
