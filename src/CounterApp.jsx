import PropTypes from 'prop-types';
import { useState } from "react";


export const CounterApp = ({ value=100,
    title='Hola, soy Dani',
    subtitle = "Soy un subtitulo",
    name= 'Dani',

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
            <button aria-label='btn-reset'  onClick={resetButtonEvent}>Reset</button>
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