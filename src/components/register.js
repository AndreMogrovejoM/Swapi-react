import React from 'react'
import { useQuery, gql} from '@apollo/client';
import Loading from './loading.js';
import Error from './error.js';
import PersonRegister from './person-register.js';
import { Grid } from 'semantic-ui-react'

/*Query to swapi*/
const SHOWLIST = gql`
query getlistcharacter($cursor : String){

  allPeople( first:5,  after: $cursor ) {
      edges{
        node{
          id
          name
          birthYear
          eyeColor
          gender
          hairColor
          skinColor
          species{
            name
          }
          homeworld
          {
            name
          }
          vehicleConnection{
            vehicles{
              id
              name
            }
          }
        }
      }
      pageInfo{
        startCursor
        hasPreviousPage
        endCursor
        hasNextPage
      }
  }
}
`;



function Register(){
  /*Receiving parameters from query*/
  const {loading, error, data, fetchMore} = useQuery(SHOWLIST, {variables: {after: null}});
  /*Loading component call*/
  if(loading) return (
    <Loading />
  );

  /*Error component call*/
  if(error) return (
    <Error />
  );

  return (
    <>
      <Grid columns={1} padded>
        {
          data.allPeople.edges.map((people) => <PersonRegister key={people.node.id} {...people} />)
        }
        <button
          onClick ={() => {
          const {endCursor} = data.allPeople.pageInfo.endCursor;
          fetchMore({
            variables: {cursor: data.allPeople.pageInfo.endCursor},
            updateQuery: (previousResult, { fetchMoreResult }) => {
             const newEdges = fetchMoreResult.allPeople.edges;
             const pageInfo = fetchMoreResult.allPeople.pageInfo;
             return newEdges.length
               ? {
                 allPeople: {
                     __typename: previousResult.allPeople.__typename,
                     edges: [...previousResult.allPeople.edges, ...newEdges],
                     pageInfo
                   }
                 }
               : previousResult;
           }
          });
        }
      }
      >
      </button>
      </Grid>


    </>
  );
}

export default Register;
