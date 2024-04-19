import { React } from 'react';

const PassWord = (context) => {
	const {
		state: { password },
		actions: { setPassword },
	} = context;

	return <div>
		<label>Enter PassWord:</label>
		<input
			type="text"
			value={ password }
			onChange={ (event) =>
				setPassword(event.target.value) }
		/>
	</div>;
};

export default PassWord;
