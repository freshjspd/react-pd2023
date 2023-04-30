import React, {useState, useEffect} from 'react';

const options = {
    results: 10,
    page: 1,
    seed: 'pd2023'
  }

export default function UsersLoad(props) {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); //isLoading
  const [isError, setIsError] = useState(false);
  
  async function load({results, page, seed}){
    setIsFetching(true);
    await fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
    .then((response) => {
      //console.log(response);
      if(!response.ok) {throw new Error(response.statusText);}
      return response.json();
    })
    .then((data) => setUsers(data.results))
    .catch((error) => setIsError(true))
    .finally(() => {setIsFetching(false)});
  }

  useEffect(() => {
    load(options);
  }, [] );

  return (
    <>
    {isError && <h3>Error load</h3>}
    {isFetching && <h3>Loading...</h3>}
    <ol>
        {users.map((u,i) => <li key={i}>{JSON.stringify(u)}</li>)}
    </ol>
    </>
  );
}
