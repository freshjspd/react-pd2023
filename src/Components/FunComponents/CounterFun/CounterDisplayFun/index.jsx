import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterDisplayFun(props) {
    const {value, valueHandler} = props;

    const upd = () => { valueHandler(0); }  
  
    return (
        <>
            <h3>Inner display : {value}</h3>
            <button onClick={upd}>update</button>
        </>
    )
  }

CounterDisplayFun.propTypes = {
    value: PropTypes.number.isRequired,
    valueHandler: PropTypes.func.isRequired,
}