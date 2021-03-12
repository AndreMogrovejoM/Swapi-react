import React from 'react'
import './components-styles/person-register.css'
import { Grid ,Card, Image } from 'semantic-ui-react'
function PersonRegister({id, node, species, homeworld}){
  //console.log({species});
  //console.log({species}.map((species) => {species.id}));

  //console.log(species.map((specie) => specie.id));


  return (
    <Grid.Column key={id}>
      <Card className = "person-cell" fluid = {true}>
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

    </Grid.Column>
  );

}

export default PersonRegister;
