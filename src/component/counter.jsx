import React, { Component } from "react";

class Counter extends Component {

  badgeStyles = {
    display: "inline-block",
    marginRight: 10
  };

  getBadgeClasses = () => {
    let classes = "badge badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  };

  render() {
    return (
      <div className="counter">
        <span style={this.badgeStyles} className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button className="btn btn-primary" onClick={()=> this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
