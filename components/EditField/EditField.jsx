import React, { useState } from 'react';

const EditField = ({ label = '', initValue = '', onSubmit }) => {
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(initValue);

	const handleClick = () => !editing && setEditing(true);
	const handleCancel = () => setEditing(false);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='w-full'>
			{editing ? (
				<form className='w-full' onSubmit={handleSubmit}>
					<p>{label}</p>
					<input autoFocus value={value} onChange={(e) => setValue(e.target.value)} />
					<button
						className='bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 m-1 rounded focus:outline-none'
						type='submit'
					>
						OK
					</button>
					<button
						className='bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 m-1 rounded focus:outline-none'
						type='button'
						onClick={handleCancel}
					>
						CANCEL
					</button>
				</form>
			) : (
				<div className='hover:cursor-pointer hover:bg-gray-900 w-full' onClick={handleClick}>
					<p>{label}</p>
					<p>{initValue}</p>
				</div>
			)}
		</div>
	);
};

export default EditField;
