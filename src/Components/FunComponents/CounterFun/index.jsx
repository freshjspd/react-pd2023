import React, { useState, useReducer } from 'react';
import { ThemeContext } from '../../../contexts';
import styles from './CounterFun.module.css';

const initialState = {value: 0};

const reducer = (state, action) => {
    switch(action.type){
        case 'INC':  return {value: state.value + 1};
        case 'DEC': return {value: state.value - 1};
        default: return {value: state.value};
    }
}

export default function CounterFun(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <ThemeContext.Consumer>
        {theme => {
          return(
            <div>
              <h1>Counter: {state.value}</h1>
              <button onClick={() => dispatch({type:'INC'})}>+</button>
              <button onClick={() => dispatch({type:'DEC'})}>-</button>
            </div>
          );}}
      </ThemeContext.Consumer>
    )
}

