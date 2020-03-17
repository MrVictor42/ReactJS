import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  	return (
    	<div className="App">
			<Greet name = 'Bruce' heroName = 'Batman'>
				<p> This is a childern Props </p>
			</Greet>
			<Greet name = 'Clack' heroName = 'Superman'>
				<button> Action </button>
			</Greet>
			<Greet name = 'Diana' heroName = 'Wonder Woman'/>
			<Welcome name = 'Bruce' heroName = 'Batman'/>
			<Welcome name = 'Clack' heroName = 'Superman'/>
			<Welcome name = 'Diana' heroName = 'Wonder Woman'/>
			<Hello/> 
    	</div>
  	);
}

export default App;