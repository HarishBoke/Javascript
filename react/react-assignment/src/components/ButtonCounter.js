// Create functional component 
// Use hooks and update value on button click 
// create display, propsm, state and useState(), handleClick APP and render all compoment from one component


import React, {useState} from 'react';

function ButtonCounter(){
    const [counter, setCounter] = useState(0);
    function display(val){
        console.log(`current  Val: ${val}`)
    }
    
    function handleCounter(){
        display(counter);
        setCounter(counter + 1);        
    }
    return(
        // <button onClick={() => { setCounter(counter++)}}>{counter++}</button> // inline approach
        <button className="btn  btn-primary btn-lg" onClick={() => { handleCounter(counter, setCounter)}}>{counter}</button>
    )
}


export default ButtonCounter;