import { React } from 'react';
import SelectBox from './SelectBox';

const Shape = (context) => {
	const {
		config: { shapeStyles, sizeStyles, shapes, sizes, colors },
		state: { shape, size, color },
		actions: { setShape, setSize, setColor },
	} = context;

	return <div>
		<div style={ {
			...shapeStyles[shape],
			...sizeStyles[size],
			backgroundColor: color,
		} }
		/>
		<SelectBox { ...{ data: { action: setShape, list: shapes }} }/>
		<SelectBox { ...{ data: { action: setSize, list: sizes }} }/>
		<SelectBox { ...{ data: { action: setColor, list: colors }} }/>
	</div>;
};

export default Shape;
