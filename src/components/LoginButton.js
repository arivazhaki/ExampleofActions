import { React } from 'react';

const LoginButton = (context) => {
	const {	actions: { setProfileName }} = context;

	return (
		<button
			onClick={ () => setProfileName() }
		>
			Login
		</button>
	);
};

export default LoginButton;
