import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CounterDisplayFun from './CounterDisplayFun';

export default function CounterFun(props) {
    const {step, initialValue} = props;
    const [value, setValue] = useState(initialValue);

    const inc = () => { setValue(value + step); }

    const dec = () => { setValue(value - step); }

    const valueHandler = (newValue) => {setValue(newValue);}

    return (
      <>
        <h1>Counter: {value}</h1>
        <p>step: {step}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <CounterDisplayFun value={value} valueHandler={valueHandler} />
      </>
    )
}

CounterFun.propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number
}

CounterFun.defaultProps = {
    step: 1,
    initialValue: 0
}