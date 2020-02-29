import React, { Component } from 'react';
import './App.css';
import Person from './component/person';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: [
                { name: 'Suhail', age: '33' },
                { name: 'Nargis', age: '33' },
                { name: 'Anam', age: '33' },
            ],
            showPerson: false
        };
    }

    handleClick() {
        this.setState({
            ...this.state,
            showPerson: !this.state.showPerson

        });
        this.showPerson = !this.showPerson;
    }

    handleChange(event) {
        this.setState({
            person: [
                { name: event.target.value, age: '31' },
            ]
        });
    }

    getUpdatedValue = (updateStr) => {
        this.setState({
            ...this.state,
            person:[
                {
                    name:updateStr,
                    age: '31'
                }
            ]
        });
    }

    deleteHandler(index) {
        let persons = this.state.person.filter((val,ind) => ind !== index);
        this.setState({
            person :persons
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
                    this.state.person.map( (elm,index) => {
                        return <Person 
                            onChange={this.getUpdatedValue} 
                            delete={() => this.deleteHandler(index)}
                            name={elm.name} 
                            age={elm.age} 
                            key={index}/>
                    })
                }
            </div>
        )
    };
}

export default App;
