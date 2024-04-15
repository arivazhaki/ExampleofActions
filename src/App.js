import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';
import context from './core/context';
import Shape from './components/Shape';

const App = ({ state: { count, refreshID }}) =>
	<div className="App">
		<div>Count: { count }</div>hello world
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { refreshID }</div>
		<center>
			<Shape{ ...context }/>
		</center>
	</div>;

export default App;
