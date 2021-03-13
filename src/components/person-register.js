import React from "react";
import "./components-styles/person-register.css";
import { Grid, Card, Image } from "semantic-ui-react";
import Loading from "./loading";
function PersonRegister({ node, update,loading }) {

  return (
    <>
      <Grid.Row >
        {/*Loading component call*/
        loading? <Loading /> : ''}
        <Card
          className="person-cell"
          fluid={true}
          onClick={() => {
            update({
              eyeColor: node?.eyeColor,
              hairColor: node?.hairColor,
              skinColor: node?.skinColor,
              birthYear: node?.birthYear,
              vehicleConnection: node?.vehicleConnection,

            });
          }}
        >
          <Card.Content>
            <Card.Header>{node.name}</Card.Header>
            <div className="p1-low-emphasis">
              <Card.Description className="person-description">
                <p>
                  {node.species ? node.species.name : "Human"} from{" "}
                  {node.homeworld.name}
                </p>
              </Card.Description>
            </div>
            <Image
              className="keyword-arrow"
              floated="right"
              src="images/icon-right-arrow.svg"
            />
          </Card.Content>
        </Card>
      </Grid.Row>
    </>
  );
}

export default PersonRegister;
