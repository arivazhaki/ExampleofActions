import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	shape: 'square',
	size: 'large',
	color: 'indigo',
	userName: '',
	password: '',
	email: '',
	profile: {},
	profileName: '',
	loginButton: 'login',
};

export default seed;
