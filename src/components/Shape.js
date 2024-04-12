import { React } from 'react';
import SelectBox from './SelectBox';

const Shape = (context) => {
	const { config: { shapeStyles }, state: { shape }} = context;

	return <div>
		<div style={ {
			...shapeStyles[shape],
			backgroundColor: 'blue',
		} }
		/>
		<SelectBox { ...context }/>
	</div>;
};

export default Shape;
