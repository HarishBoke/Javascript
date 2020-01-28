// Create functional component 
// Use hooks and update value on button click 
// create display, propsm, state and useState(), handleClick APP and render all compoment from one component


import React from 'react';
import {setCounter} from '../js/actions/index';
import store from '../js/store/index';

function ButtonCounterRedux(){
   // const [counter, setCounter] = useState(0);
   let counter = store.getState().btnCounter;

    function display(val){
        console.log(`current  btn Counter from redux: ${val}`)
    }
    
    function handleCounter(){
        counter++;
        display(counter)

        store.dispatch( setCounter({'btnCounter':counter}) );

       // display(counter);
        //setCounter(counter + 1, display(counter));     



        // TL;RD https://medium.learnreact.com/setstate-takes-a-callback-1f71ad5d2296

        /*
        Calling multiple times will result same and may not return as expected, REASON: setState is asyc call and it binds all
        calls at once and works, Expected output can be achieved by performing callback method on setState no matter class/functional component.
        setCounter(counter + 1);        
        setCounter(counter + 1);        
        setCounter(counter + 1);        
        */ 
    }
    return(
        // <button onClick={() => { setCounter(counter++)}}>{counter++}</button> // inline approach
        <button className="btn  btn-primary btn-lg" onClick={() => { handleCounter()}}>{counter}</button>
    )
}


export default ButtonCounterRedux;