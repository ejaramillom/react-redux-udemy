const redux = require('redux');

// this has to be a pure function, same inputs send the same result, not write a database, 
// not do a fetch to an API or anything like that
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  
  return state;
};

const store = redux.createStore(counterReducer);

console.log('the store has this: ', store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });