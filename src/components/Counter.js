import { useSelector } from "react-redux";
// import { connect } from "react-redux";
// we would have to use a connector in class based components

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.value}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
