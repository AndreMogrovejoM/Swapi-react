import { gql } from "@apollo/client";

/*Query to swapi*/
export const SHOWLIST = gql`
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
