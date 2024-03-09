import logo from "./logo.svg";
import React, { Component } from 'react'
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { key: 1, value: 6 },
      { key: 2, value: 0 },
      { key: 3, value: 0 },
      { key: 4, value: 0 },
    ],
  };

  onDelete = (id) => {
    const counters = this.state.counters.filter((count) => count.key !== id);
    this.setState({ counters });
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  onDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  reset = () => {
    //const counters = [...this.state.counters];
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter( counter=> counter.value > 0).length} />
        <main className="container">
          <Counters
            onDelete={this.onDelete}
            reset={this.reset}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
