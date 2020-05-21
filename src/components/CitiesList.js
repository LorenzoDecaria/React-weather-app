import React, { useEffect } from "react";
import { connect } from "react-redux";
import CityItem from './CityItem'

const CitiesList = (props) => {

  useEffect( () => {
    localStorage.setItem('cities', JSON.stringify(props.cities))
  }, [props.cities])

  return (
    <div>
      {props.cities.map(
        (city) => <CityItem key={city.id} city={city} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
}

const ConnectedCitiesList = connect(mapStateToProps)(CitiesList)

export default ConnectedCitiesList;
