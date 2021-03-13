import React from 'react'
import './components-styles/person-details.css'
import { Card, Image, Icon, Grid } from "semantic-ui-react"

const DETAILS = ({header, text}) => {
    return (
      <div className='info-content'>
        <h2 className="header">{header}</h2>
        <h2 className="text">{text}</h2>
        <hr />
      </div>
    )
}

function PersonDetails({eyeColor, hairColor, skinColor, birthYear, onClick}){


  console.log("CLICK");
  return (
    <>
      <div className = "details-box">
        <div className = "title-details"> General Information </div>
        <DETAILS header={"Eye Color"} text={eyeColor}/>
        <DETAILS header={"Hair Color"} text={hairColor}/>
        <DETAILS header={"Skin Color"} text={skinColor}/>
        <DETAILS header={"Birth Year"} text={birthYear}/>

      </div>
    </>
  );
}
/*
const DETAILS = ({header, text}) => {
    return (
      <div className='info-content'>
        <h2 className="header">{header}</h2>
        <h2 className="text">{text}</h2>
        <hr />
      </div>
    )
}

const PersonDetails = ({eyeColor, hairColor, skinColor, birthYear, onClick}) =>{

  console.log("CLICK");
  return (
    <>
      <Card className = "details-box" onClick={onClick}>
        <div className = "title-details"> General Information </div>
        <DETAILS header={"Eye Color"} text={eyeColor}/>
        <DETAILS header={"Hair Color"} text={hairColor}/>
        <DETAILS header={"Skin Color"} text={skinColor}/>
        <DETAILS header={"Birth Year"} text={birthYear}/>

      </Card>
    </>
  );
}
*/

export default PersonDetails;
