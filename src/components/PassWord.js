import { React } from 'react';

const PassWord = (context) => {
	const {
		state: { password },
		actions: { setPassword },
	} = context;

	return <div>
		<label htmlFor="pwd">Enter Password:</label>
		<input
			type="password"
			id="pwd"
			name="pwd"
			value={ password }
			onChange={ (event) =>
				setPassword(event.target.value) }
		/>
	</div>;
};

export default PassWord;
