import { createSlice, configureStore } from '@reduxjs/toolkit';
// this works as create reducer

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // one should not use the reducer like
//     // state.counter++
//     // because that is mutating directly the state
//     // instead create a copy and make a new state as shown below
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer
});

// this is an alternative for several reducers
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer }
// });

// const store = createStore(counterSlice.reducer);
// if we had multiple slices, this is a problem, because there can exist several slices

export default store;
