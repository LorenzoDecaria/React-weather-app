import React from "react";

const CityItem = ({ city }) => {
  return (
    <div>
      <h3>{city.name}</h3>
      <p>Sunny, 80 degrees</p>
    </div>);
};

export default CityItem;
