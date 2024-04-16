import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';
import context from './core/context';
import Shape from './components/Shape';

const App = ({ state: { count, refreshID }}) =>
	<div className="App">
		<div className="borderStyle">
			<h1>Welcome
			</h1>
			<div>{ SimpleButton() }</div>
			<div>Count: { count }</div>
			<div>Refresh ID: { refreshID }</div>
			<center>
				<Shape { ...context }/>
			</center>
		</div>
	</div>;

export default App;
