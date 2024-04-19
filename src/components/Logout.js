import React, { useState } from 'react';

const Logout = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		// Perform authentication logic here, for simplicity just toggling isLoggedIn
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		// Perform logout logic here
		setIsLoggedIn(false);
	};

	return (
		<div>
			{ isLoggedIn
				? <button onClick={ handleLogout }>Logout</button>
				: <button onClick={ handleLogin }>Login</button> }
		</div>
	);
};

export default Logout;
