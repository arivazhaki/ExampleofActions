import { React } from 'react';

const LoginButton = (context) => {
	const {
		state: { loginButton },
		actions: { setLogin },
	} = context;

	return 	(
		<button
			onClick={ () => {
				loginButton === 'logout'
					? setLogin('login')
					: setLogin('logout');
			} }
		>{ loginButton }
		</button>
	);
};

export default LoginButton;
