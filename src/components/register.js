import React from 'react'
import { useQuery, gql} from '@apollo/client';
import Loading from './loading.js'
import Error from './error.js'

const ALL_PEOPLE = gql`
  query People {
    allPeople {
      people{
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        skinColor
        species{
          id
          name
        }
        homeworld {
          id
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

  }
`;

function Register(){
  const {loading, error, data} = useQuery(ALL_PEOPLE);

  if(loading) return (
    <Loading />
  );
  if(error) return (
    <Error />
  );

  return (
    <>
        <div className= "register-text">
          {data.allPeople.people.map(people => {
            return <p key={people.id}>{people.name}</p>;
          })
          }}}
        </div>
    </>
  );
}

export default Register;
