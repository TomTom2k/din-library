import React from 'react';

const Input = ({ id, label, type, placeholder }) => {
	return (
		<div className="input-form">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				required
				name={id}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
