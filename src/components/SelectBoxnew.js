/* eslint-disable no-undef */
import React from 'react';
import { peek } from '@laufire/utils/debug';

const SelectBoxnew = ({ actions, config: { sizes }}) => {
	peek(sizes);
	return (
		<select
			onChange={ (event) => actions.setSize(event.target.value) }
		>
			{ sizes.map((newValue, index) =>
				<option
					key={ index }
					value={ newValue }
				>
					{ newValue }
				</option>) }
		</select>
	);
};

export default SelectBoxnew;
