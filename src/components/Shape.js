import { React } from 'react';
import SelectBox from './SelectBox';

const Shape = (context) => {
	const {
		config: { shapeStyles, sizeStyles, shapes, sizes },
		state: { shape, size },
		actions: { setShape, setSize },
	} = context;

	return <div>
		<div style={ {
			...shapeStyles[shape],
			...sizeStyles[size],
			backgroundColor: 'blue',
		} }
		/>
		<SelectBox { ...{ data: { action: setShape, list: shapes }} }/>
		<SelectBox { ...{ data: { action: setSize, list: sizes }} }/>
	</div>;
};

export default Shape;
