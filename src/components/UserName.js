import { React } from 'react';

const UserName = (context) => {
	const {
		state: { userName },
		actions: { setUserName },
	} = context;

	return <div>
		<label htmlFor="mailId">Enter Your UserName:</label>
		<input
			type="text"
			value={ userName }
			onChange={ (event) =>
				setUserName(event.target.value) }
		/>
	</div>;
};

export default UserName;
