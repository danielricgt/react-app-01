import PropTypes from 'prop-types';
import { useState } from "react";


const CounterApp = ({ value,
    title,
    subtitle,
    name,

}) => {
    // i destructure the props that i am passing to the component
    const [counter, setCounter] = useState(value);

    const incrementButtonEvent = () => {
        // console.log(event )
        // setCounter(counter+1); 
        setCounter(counter => (counter + 1))
        // console.log(value) 
    }

    const decrementButttonEvent = () => {
        if(counter === 0){
        return;  
    }
    else {
        setCounter(counter => (counter - 1))
    }
}

    const resetButtonEvent = () => {
        setCounter(value);
    }

    return (
        <>

            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <p>{title} {subtitle} {name}</p>
            <button onClick={incrementButtonEvent}>+1</button>
            <button onClick={decrementButttonEvent}>-1 </button>
            <button onClick={resetButtonEvent}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}


export default CounterApp;