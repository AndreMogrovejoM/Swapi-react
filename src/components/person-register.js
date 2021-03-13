import React from 'react'
import './components-styles/person-register.css'
import { Grid ,Card, Image } from 'semantic-ui-react'
import PersonDetails from './person-details.js'
import Error from './error.js'
import {Link} from 'react-router-dom'

const Show = ({node}) => {
    return (
      <>
        <PersonDetails key={node.id} {...node} />
        <p> hola </p>
      </>
    );
}
function PersonRegister({node}){
  var {Click} = false;
  return (
    <>
    <Grid.Column key={node.id}>
      <Card className = "person-cell" fluid = {true}
        onClick = {() => {
          Show({node})
        }}
      >
        <Card.Content>
          <Card.Header>{node.name}</Card.Header>
          <div className = "p1-low-emphasis">
            <Card.Description className = "person-description">
            <p>
            {node.species ? node.species.name : "Human"} from {node.homeworld.name}
            </p>
          </Card.Description>
          </div>
          <Image
            className = 'keyword-arrow'
            floated = 'right'
            src = 'images/icon-right-arrow.svg'
          />
        </Card.Content>
      </Card>
      <PersonDetails key={node.id} {...node} />
    </Grid.Column>
    </>
  );

}

export default PersonRegister;
