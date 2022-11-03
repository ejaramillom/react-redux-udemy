import { createSlice, configureStore } from '@reduxjs/toolkit';
// this works as create reducer

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload is the name of the property used in the object of toolkit
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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

// counterSlice.actions.toggleCounter;
// this is an action creating function, 
// so we dont have to manually write types for actions or write the actions themselves

// const store = configureStore({
//   reducer: counterSlice.reducer
// });

// this is an alternative for several reducers
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

// const store = createStore(counterSlice.reducer);
// if we had multiple slices, this is a problem, because there can exist several slices

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
