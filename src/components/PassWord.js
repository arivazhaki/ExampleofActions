import { React } from 'react';

const PassWord = (context) => {
	const {
		state: { passWord },
		actions: { setPassword },
	} = context;

	return <div>
		<label htmlFor="enterpassword">Enter PassWord:</label>
		<input
			type="text"
			value={ passWord }
			onChange={ (event) =>
				setPassword(event.target.value) }
		/>
	</div>;
};

export default PassWord;
