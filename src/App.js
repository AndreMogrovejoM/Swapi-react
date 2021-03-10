import React from 'react';
import { useQuery, gql} from '@apollo/client';

const ALL_PEOPLE = gql`
  query People {
    allPeople {
      people {
        id
        name
      }
    }
  }
`;


function App() {
  const {loading, error, data} = useQuery(ALL_PEOPLE);

  if(loading) return <p>Loading ...</p>
  if(error) return <p> Whoops ... something is wrong!</p>

  return (
    <>
      <h2>Star Wars People {' '}
        <span role='img' aria-label='spaceships'>
          :rocket:
        </span>
      </h2>
      {data.allPeople.people.map(people => {
        return <p key={people.id}>{people.name}</p>;
      })
      }}}
    </>
  );
}

export default App;
