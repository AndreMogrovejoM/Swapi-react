import React from "react";
import "./components-styles/person-details.css";

const DETAILS = ({ header, text }) => {
  return (
    <div className="info-content">
      <h2 className="header">{header}</h2>
      <h2 className="text">{text}</h2>
      <hr />
    </div>
  );
};

function PersonDetails({ details }) {
  if(details.eyeColor !== undefined) return (
    <>
      <div className="details-box">
        <div className="title-details"> General Information </div>
        <DETAILS header={"Eye Color"} text={details?.eyeColor} />
        <DETAILS header={"Hair Color"} text={details?.hairColor} />
        <DETAILS header={"Skin Color"} text={details?.skinColor} />
        <DETAILS header={"Birth Year"} text={details?.birthYear} />
        {
            details.vehicleConnection.vehicles.length > 0 ?
            <div className="title-details">Vehicles</div>
            :
            <div className="title-details">No Vehicles Found </div>
        }
        {
            details.vehicleConnection.vehicles.map((vehicle) => (
                <DETAILS key={vehicle.name} header={vehicle.name} text={''}/>
            ))
        }
      </div>

    </>
  );
  else return (<div>HOLA</div>);
}

export default PersonDetails;
