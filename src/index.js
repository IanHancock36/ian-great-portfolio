import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'



//Store = Globalized State 

//Action = describes what you want to do if you count increment a function that returns an object
   const increment = () => {
      return{
        type: 'INCREMENT'
      }
   }
   const decrement = () => {
    return{
      type: 'DECREMENT'
    }
 }
//Reducer = 
const counter = (state = 0 ,action ) => {
  switch(action.type){
    case "INCREMENT" : 
    return state +1 ;
    case "DECREMENT" :
      return state -1; 
  }

}; 

let store = createStore(counter)

// display in console 
store.subscribe(()=> console.log(store.getState())); 

//Dispatch = execute actions 
store.dispatch(increment()); 
store.dispatch(decrement()); 
store.dispatch(decrement()); 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

