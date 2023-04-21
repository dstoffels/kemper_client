import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const EditSelect = ({ value, options = [], onChange, name }) => {
	const [editing, setEditing] = useState(false);

	const handleClick = () => setEditing(true);

	useEscKey(() => setEditing(false));

	const ref = useRef(null);
	useOutsideClick(ref, () => setEditing(false));

	options = options.map((option, i) => (
		<MenuItem key={`option-${i}`} value={name ? option[name] : option}>
			{name ? option[name] : option}
		</MenuItem>
	));

	return editing ? <Select>{options}</Select> : <div onClick={handleClick}>{value}</div>;
};

export default EditSelect;
