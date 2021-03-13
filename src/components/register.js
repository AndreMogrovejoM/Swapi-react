import React from "react";
import { useQuery } from "@apollo/client";
import {SHOWLIST} from "../query";
import { Grid, Button } from "semantic-ui-react";
import Loading from "./loading";
import Error from "./error";
import PersonRegister from "./person-register";
import PersonDetails from "./person-details";
import './components-styles/register.css'




function Register() {
  /*Hooks type to update data on person details onClick*/
  var [userSelect, setUserSelected] = React.useState({});
  /*Receiving parameters from query*/
  const { loading, error, data, fetchMore } = useQuery(SHOWLIST, {
    variables: { after: null },
  });
  /*Loading component call*/
  if (loading) return <Loading />;

  /*Error component call*/
  if (error) return <Error />;
  return (
    <>
      {/*Person details grid*/}
      <Grid>
        <Grid.Column floated='right'>
          <PersonDetails details={userSelect} />
        </Grid.Column>
      </Grid>
      {/*People list grid*/}
      <Grid padded={true} className= "register-box">
        { /*Mapping all people to PersonRegister component to be showed*/
          data.allPeople.edges.map((people) => (
          <PersonRegister
            key={people.node.id}
            update={setUserSelected}/*updating detailed info Onclick*/
            {...people}
            loading = {loading}
          />
        ))
        }
        {/*Load more data button to query for 5 new nodes to show*/}
        <Button className="my-button"
          onClick={() => {
            fetchMore({/*fetchMore function pointing to last register to get more data */
              variables: { cursor: data.allPeople.pageInfo.endCursor },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.allPeople.edges;
                const pageInfo = fetchMoreResult.allPeople.pageInfo;
                return newEdges.length
                  ? {
                      allPeople: {
                        __typename: previousResult.allPeople.__typename,
                        edges: [...previousResult.allPeople.edges, ...newEdges],
                        pageInfo,
                      },
                    }
                  : previousResult;
              },
            });
          }}
        >Load More</Button>
      </Grid>

    </>
  );
}

export default Register;
