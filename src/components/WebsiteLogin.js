import { React } from 'react';
import UserName from './UserName';
import PassWord from './PassWord';
import LoginButton from './LoginButton';

const boxStyle = {
	width: '500px',
	height: '500px',
	border: '10px solid black',
	borderRadius: '10px',
	padding: '20px',
	margin: '25px',
	marginTop: '100px',
	backgroundColor: 'pink',
};

const WebsiteLogin = (context) => {
	const { state: { profileName }} = context;

	return <div>
		<div style={ boxStyle }>
			<h1> Welcome To Laufire Account </h1>
			<UserName { ...context }/>
			<PassWord { ...context }/>
			<LoginButton { ...context }/>
			<div>Welcome { profileName }</div>
		</div>
	</div>;
};

export default WebsiteLogin;
