import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);

export default store;
// const createStore = (reducer) => {
//   let state;
//   let listeners = [];

//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     }
//   };

//   dispatch({});

//   return { getState, dispatch, subscribe };
// };