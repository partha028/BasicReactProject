import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    const {reset,counters,onDelete,onIncrement, onDecrement} = this.props
    return (
      <div >
        <button onClick={reset} className="btn btn-primary btn-sm m-4">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.key}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
