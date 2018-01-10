import React from 'react';
import { Link } from 'react-router-dom'; 

const End = ({ object }) => {
	return (
		<div id="end">
			<label>Your word in color:</label>
			{
				(object && object.input && object.color) ?
				<h3 style={{ color: object.color }}>{object.input}</h3> :
				<h3>Incomplete</h3>
			}
			<Link to="/">Start Again!</Link>
		</div>
	);
};

export default End;