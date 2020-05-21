import React from "react";
import { connect } from 'react-redux'
import { removeCity } from '../actions/cities'

const CityItem = (props) => {
  return (
    <div>
      <h3>{props.city.name}</h3>
      <p>Sunny, 80 degrees</p>
      <button onClick={() => props.dispatch(removeCity({id: props.city.id}))}>Remove</button>
    </div>);
};
 
export default connect()(CityItem);
