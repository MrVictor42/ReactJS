import React, { Component } from 'react';

class Counter extends Component {

    constructor () {
        super();
        this.state = {
            count: 0
        };
    }

    add() {
        this.setState({
            count: this.state.count + 1   
        })
    }

    sub() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h1> Value: { this.state.count } </h1>
                <button onClick = {() => { this.add() }}> Add </button>
                <button onClick = {() => { this.sub() }}> Sub </button>
            </div>
        );
    }
};

export default Counter;