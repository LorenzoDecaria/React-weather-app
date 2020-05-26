import React from "react";
import { connect } from 'react-redux'
import { removeCity } from '../actions/cities'

const CityItem = (props) => {

  const description = () => {
    return `${props.city.weather.weather[0].main}, ${props.city.weather.main.temp} degrees`
  }

  const icon = () => {
    const iconBaseUrl = 'http://openweathermap.org/img/wn/'
    return iconBaseUrl + props.city.weather.weather[0].icon + '.png'
  }

  return (
    <div>
      <h3>{props.city.name}</h3>
      {props.city.loading && <p>Loading...</p>}
      {props.city.weather && <div><p>{description()}</p><img src={props.city.weather ? icon() : ''} alt=''/></div>}
      {props.city.error && <p>{(props.city.error.message ?? "Error retrieving weather")}</p>}
      <button onClick={() => props.dispatch(removeCity({id: props.city.id}))}>Remove</button>
    </div>);
};
 
export default connect()(CityItem);