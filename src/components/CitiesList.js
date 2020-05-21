import React from "react";
import { connect } from "react-redux";
import CityItem from './CityItem'

const CitiesList = (props) => {
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
