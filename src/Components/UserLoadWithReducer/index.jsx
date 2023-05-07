import React, {useState, useEffect, useReducer} from 'react';
import {load} from '../../api';

const initialState = {currentPage: 1};

const reducer = (state, action) => {
    switch(action.type){
        case 'NEXT':  return {currentPage: state.currentPage + 1};
        case 'PREV': return {currentPage: state.currentPage - 1};
        default: return {currentPage: state.currentPage};
    }
}

export default function UserLoadWithReducer(props) {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); 
  const [isError, setIsError] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setIsFetching(true);
    load({page: state.currentPage})
    .then(data => setUsers(data.results))
    .catch((error) => setIsError(true))
    .finally(() => setIsFetching(false))
  }, [state.currentPage] );

  return (
    <>
    {isError && <h3>Error load</h3>}
    {isFetching && <h3>Loading...</h3>}
    <button onClick={()=>{dispatch({type: 'PREV'})}}>prev page</button>
    <button onClick={()=>{dispatch({type: 'NEXT'})}}>next page </button>
    <span>Page: {state.currentPage}</span>
    <ol>
        {users.map((u,i) => <li key={i}>{JSON.stringify(u)}</li>)}
    </ol>
    </>
  );
}
