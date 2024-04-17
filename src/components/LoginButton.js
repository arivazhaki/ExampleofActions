import { React } from 'react';

const LoginButton = (context) => {
	const {	actions: { setProfile }} = context;

	return (
		<button
			onClick={ () => setProfile() }
		>
			Login
		</button>
	);
};

export default LoginButton;
