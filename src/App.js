import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  	return (
    	<div className="App">
			<FunctionClick/>
			{/* <Message/>
			<Counter />
			<Greet name = 'Clack' heroName = 'Superman'>
				<button> Action </button>
			</Greet>
			<Welcome name = 'Bruce' heroName = 'Batman'/> */}
			{/* <Greet name = 'Bruce' heroName = 'Batman'>
				<p> This is a childern Props </p>
			</Greet>
			<Greet name = 'Clack' heroName = 'Superman'>
				<button> Action </button>
			</Greet>
			<Greet name = 'Diana' heroName = 'Wonder Woman'/>
			<Welcome name = 'Clack' heroName = 'Superman'/>
			<Welcome name = 'Diana' heroName = 'Wonder Woman'/>
			<Hello/>  */}
    	</div>
  	);
}

export default App;