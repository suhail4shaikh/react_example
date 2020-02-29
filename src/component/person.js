import React, { Component } from 'react';

export default class Person extends Component {

    render() {
        return (
            <div>
                <p onClick={this.props.updateState}>I am {this.props.name}, my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.onValueUpdate} value={this.props.name} />
            </div>
        );
    }
}