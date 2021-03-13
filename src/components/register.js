import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid, Button } from "semantic-ui-react";
import Loading from "./loading";
import Error from "./error";
import PersonRegister from "./person-register";
import PersonDetails from "./person-details";
import './components-styles/register.css'


/*Query to swapi*/
const SHOWLIST = gql`
  query getlistcharacter($cursor: String) {
    allPeople(first: 5, after: $cursor) {
      edges {
        node {
          id
          name
          birthYear
          eyeColor
          gender
          hairColor
          skinColor
          species {
            name
          }
          homeworld {
            name
          }
          vehicleConnection {
            vehicles {
              id
              name
            }
          }
        }
      }
      pageInfo {
        startCursor
        hasPreviousPage
        endCursor
        hasNextPage
      }
    }
  }
`;

function Register() {
  /*Receiving parameters from query*/
  var [userSelect, setUserSelected] = React.useState({});
  const { loading, error, data, fetchMore } = useQuery(SHOWLIST, {
    variables: { after: null },
  });
  /*Loading component call*/
  if (loading) return <Loading />;

  /*Error component call*/
  if (error) return <Error />;
  return (
    <>
      <Grid>
        <Grid.Column floated='right'>
          <PersonDetails details={userSelect} />
        </Grid.Column>
      </Grid>
      <Grid padded={true} className= "register-box">
        {data.allPeople.edges.map((people) => (
          <PersonRegister
            key={people.node.id}
            update={setUserSelected}
            {...people}
            loading = {loading}
          />
        ))}
        <Button className="my-button"
          onClick={() => {
            fetchMore({
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
