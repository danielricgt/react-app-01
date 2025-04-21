// when i want to agrup two elements in a root element i can use a fragment

import { Fragment } from "react"


const messageObjetc = {
    name: 'Fernando',
    age: 35,
}

const getSummarize = (a,b) => {
    return  a+b;
}


export const FirstApp = () => {
  return (  
    //* <i need always to start a component encapsulated with a father node  > */
    <>
    {/* <h1> {JSON.stringify(messageObjetc)} FirstApp!!!</h1> */}
    <p>{getSummarize(1,12)}</p>
    </>
  )
}
