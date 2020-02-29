import React, { Component } from 'react';
import './App.css';
import Person from './component/person';

class App extends Component {
    
    state = {
        person: [
            { name: 'Suhail', age: '33' },
        ],
        showPerson: false
    };


    handleClick() {
        this.setState({
            ...this.state,
            showPerson: !this.state.showPerson

        });
        this.showPerson = !this.showPerson;
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            ...this.state.person,
            person: [
                { name: event.target.value, age: '31' },
            ]
        });
    }


    render() {
        const buttonStyle = {
            border: '1px solid black',
            borderRadius: '4px',
            padding: '5px 1em',
            background: 'white',
            fontSize: '12px',
            display: 'block',
            marginTop: '10px'
        };


        return (


            <div>
                <h1>I am react app !!!</h1>
                <input type="text" onChange={(event) => this.handleChange(event)} />
                <button style={buttonStyle} onClick={() => this.handleClick()}>Toggle name </button>

                {
                    this.state.showPerson ? 
                        this.state.person.map(elm => <Person 
                            onValueUpdate={ this.handleChange} 
                            updateState={this.handleClick} 
                            key={elm.name} 
                            name={elm.name} 
                            age={elm.age} />) : null
                }
            </div>
        )
    };
}

export default App;
