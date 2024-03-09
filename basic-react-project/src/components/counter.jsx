import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    console.log(this.props);
    const { onDelete, onIncrement, counter, onDecrement } =
      this.props;
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <span className={this.newMethod()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm"
            > + 
            </button>
            <button
              onClick={() => onDecrement(counter)}
              disabled={counter.value <= 0 ?  true : false}
              className="btn btn-secondary btn-sm m-2"
            > - 
            </button>
            <input className="fa-regular fa-heart" type="checkbox" />
            <button
              onClick={() => {
                onDelete(counter.key);
              }}
              className="btn btn-danger btn-sm"
            > X
            </button>
          </div>
        </div>
      </div>
    );
  }

  newMethod() {
    let classCount = "badge badge-";
    return (classCount +=
      this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? <h6>Zero</h6> : value;
  };
}
