import { React } from 'react';

const LoginButton = (context) => {
	const {	actions: { setLogin }} = context;

	return (
		<button
			onClick={ () => setLogin(false) }
		>
			Logout
		</button>
	);
};

export default LoginButton;
