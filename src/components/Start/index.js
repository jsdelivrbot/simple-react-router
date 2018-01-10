import React from 'react';
import { Link } from 'react-router-dom'; 

const Start = ({colors, onClick}) => {
	return (
		<div id="start">
			<label>Pick a Color</label>
			<ul>
			{
				colors.map((color) => {
					return <li key={color.id} onClick={() => onClick(color.hex)}><Link to="/middle">{color.value}</Link></li>;
				})
			}
			</ul>
		</div>
	);
};

export default Start;