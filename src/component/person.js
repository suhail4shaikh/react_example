import React, { Component } from 'react';

export default class Person extends Component {

    onValueUpdate(e) {
        console.log(e.target.value);
    }


    render() {
        return (
            <div>
                <p onClick={this.props.updateState}>I am {this.props.name}, my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={(e) => this.props.onChange(e.target.value)} value={this.props.name}  />
                <button onClick={this.props.delete}>Delete it</button>
            </div>
        );
    }
}