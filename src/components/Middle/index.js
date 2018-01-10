import React from 'react';
import { Link } from 'react-router-dom'; 

import UserInput from '../common/UserInput';

const Middle = ({ input, onChange, onSubmit }) => {
	return (
		<div id="start">
			<label>Type a word or phrase</label>
			<UserInput value={input} onChange={onChange} />
			<div onClick={onSubmit}>
				<Link to="/end">Submit</Link>
			</div>
		</div>
	);
};

export default Middle;