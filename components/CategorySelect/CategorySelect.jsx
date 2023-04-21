import useEscKey from '@/hooks/useEscKey.js';
import useOutsideClick from '@/hooks/useOutsideClick.js';
import { MenuItem, Select } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';

const CategorySelect = ({ entry_id, category, categories = [], onChange }) => {
	const [editing, setEditing] = useState(false);
	const handleChange = async (e) => {
		const response = await axios.patch(`http://localhost:5000/api/expenses/${entry_id}`, {
			category: e.target.value,
		});
		onChange(response.data);
		setEditing(false);
	};

	const handleClick = () => setEditing(true);

	useEscKey(() => setEditing(false));

	const ref = useRef(null);
	useOutsideClick(ref, () => setEditing(false));

	const options = categories.map((option) => (
		<MenuItem key={`option-${option}`} value={option.name}>
			{option.name}
		</MenuItem>
	));

	return (
		<>
			{editing ? (
				<Select ref={ref} variant='standard' size='small' value={category} onChange={handleChange}>
					{options}
				</Select>
			) : (
				<div onClick={handleClick}>{category}</div>
			)}
		</>
	);
};

export default CategorySelect;
