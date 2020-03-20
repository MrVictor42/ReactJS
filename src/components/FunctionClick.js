import React, { Component } from 'react';

class FunctionClick extends Component {

    clickHandler() {
        alert('Hold the line!! Love is not on the time oooh!');
    }

    render() {
        return (
            <div>
                <button onClick = { () => this.clickHandler() }> Love the way you said you mad </button>
            </div>
        );
    }
}

export default FunctionClick;