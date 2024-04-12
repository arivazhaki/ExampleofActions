/* eslint-disable no-undef */
import React from 'react';
import { peek } from '@laufire/utils/debug';

const SelectBox = ({ actions, config: { shapes }}) => {
	peek(shapes);
	return (
		<select
			onChange={ (event) => actions.setShape(event.target.value) }
		>
			{ shapes.map((newValue, index) =>
				<option
					key={ index }
					value={ newValue }
				>
					{ newValue }
				</option>) }
		</select>
	);
};

export default SelectBox;
