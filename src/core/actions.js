const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setSize = ({ data }) => ({ size: data });
const setColor = ({ data }) => ({ color: data });
const setUserName = ({ data }) => ({ userName: data });
const setPassword = ({ data }) => ({ password: data });
const setEmail = ({ data }) => ({ email: data });

const actions = {
	increaseCount,
	setShape,
	setSize,
	setColor,
	setUserName,
	setPassword,
	setEmail,
};

export default actions;
