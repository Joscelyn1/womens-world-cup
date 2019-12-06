import React from "react";

function Athlete(props) {
  const { athleteData } = props;
  return (
    <div>
      <h2>{athleteData.name}</h2>
      <p>{athleteData.country}</p>
      <p>{athleteData.searches}</p>
    </div>
  );
}

export default Athlete;
