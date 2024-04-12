import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';
import Shape from './components/Shape';
import context from './core/context';

const App = ({ state: { count, refreshID }}) =>
	<div className="App">
		<div>Count: { count }</div>hello world
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { refreshID }</div>
		<Shape{ ...context }/>
	</div>;

export default App;
