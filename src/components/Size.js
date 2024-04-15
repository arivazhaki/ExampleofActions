import { React } from 'react';
import SelectBoxnew from './SelectBoxnew';

const Size = (context) => {
	const { config: { sizeStyles }, state: { size }} = context;

	return <div>
		<div style={ {
			...sizeStyles[size],
			backgroundColor: 'blue',
		} }
		/>
		<SelectBoxnew { ...context }/>
	</div>;
};

export default Size;
