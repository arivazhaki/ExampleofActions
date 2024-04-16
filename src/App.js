import { React } from 'react';
import './App.scss';
import WebsiteLogin from './components/WebsiteLogin';

const App = (context) =>
	<div className="App">
		<div className="borderStyle">
			<h1>Welcome
			</h1>
			<center>
				<WebsiteLogin { ...context }/>
			</center>
		</div>
	</div>;

export default App;

// <Shape { ...context }/>
/* <div>{ SimpleButton() }</div>
			<div>Count: { count }</div>
			<div>Refresh ID: { refreshID }</div> */
