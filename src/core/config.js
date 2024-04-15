const config = {
	countStart: 0,
	increment: 2,
	shapeStyles: {
		square: {
			width: '400px',
			height: '400px',
		},
		rectangle: {
			width: '400px',
			height: '300px',
		},
		circle: {
			width: '300px',
			height: '300px',
			borderRadius: '50%',
		},
	},
	shapes: ['square', 'rectangle', 'circle'],

	sizeStyles: {
		medium: { transform: 'scale(0.7)' },
		small: { transform: 'scale(0.5)' },
		large: { transform: 'scale(1)' },
	},
	sizes: ['small', 'medium', 'large'],
};

export default config;
