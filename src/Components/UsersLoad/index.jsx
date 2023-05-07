import React, {useState, useEffect} from 'react';
import {load} from '../../api';

export default function UsersLoad(props) {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); 
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const gotoPrev = () => {
    if(currentPage > 1) {setCurrentPage(currentPage - 1); }
  }
  const gotoNext = () => {
    setCurrentPage(currentPage + 1);
  }
  
  useEffect(() => {
    setIsFetching(true);
    load(currentPage).then(data => setUsers(data.results)).catch((error) => setIsError(true)).finally(() => setIsFetching(false))
  }, [currentPage] );

  return (
    <>
    {isError && <h3>Error load</h3>}
    {isFetching && <h3>Loading...</h3>}
    <button onClick={gotoPrev}>prev page</button>
    <button onClick={gotoNext}>next page </button>
    <span>Page: {currentPage}</span>
    <ol>
        {users.map((u,i) => <li key={i}>{JSON.stringify(u)}</li>)}
    </ol>
    </>
  );
}
