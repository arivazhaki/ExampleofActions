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
