const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setSize = ({ data }) => ({ size: data });
const setColor = ({ data }) => ({ color: data });
const setUserName = ({ data }) => ({ userName: data });
const setPassword = ({ data }) => ({ password: data });
const setProfile = ({ state: { userName, password }}) => ({
	profile: {
		userName,
		password,
	},
});

const setLogin = ({ state: { userName }, data }) => ({
	loginButton: data,
	profileName: userName,
	userName: '',
	password: '',
});

const actions = {
	increaseCount,
	setShape,
	setSize,
	setColor,
	setUserName,
	setPassword,
	setProfile,
	setLogin,
};

export default actions;
