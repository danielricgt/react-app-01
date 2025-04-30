// when i want to agrup two elements in a root element i can use a fragment

import { Fragment } from "react"
import PropTypes from 'prop-types';


const messageObjetc = {
    name: 'Fernando',
    age: 35,
}

const getSummarize = (a, b) => {
    return a + b;
}


export const FirstApp = ({ title='Hola, soy Dani', subtitle=123, name = 'Dani' }) => {

    if (!title) {
        throw new Error("title is required");
    }

    return (
        //* <i need always to start a component encapsulated with a father node  > */
        <>
            {/* <h1> {JSON.stringify(messageObjetc)} FirstApp!!!</h1> */}
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{name}</p> 
            {/* <p>{getSummarize(1,12)}</p> */}
        </>
    )
}

// i can use PropTypes to validate the props that i am passing to the component like a typescript strict typing


