import React, { useState } from "react";
import { connect } from 'react-redux'
import { addCity } from '../actions/cities'

const Header = (props) => {

  const [city, setCity] = useState('')

  const handleAddCity = (e) => {
    setCity('')
    props.dispatch(addCity({name: city}))
  }

  return (
    <div>
      <h1>Weather App</h1>
      <label htmlFor='city'>Add a city:</label>
      <input type='text' name='city' placeholder='type the name of a city' value={city} onChange={ (e) => setCity(e.target.value) }/>
      <button disabled={city.length === 0} onClick={ handleAddCity }>Add</button>
    </div>);
};

const ConnectedHeader = connect()(Header)

export default ConnectedHeader;
