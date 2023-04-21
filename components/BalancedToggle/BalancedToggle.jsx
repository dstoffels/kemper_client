import { Checkbox } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const BalancedToggle = ({ entry_id, is_balanced, onChange }) => {
	const handleChange = async (e) => {
		const response = await axios.patch(`http://localhost:5000/api/expenses/${entry_id}`, {
			is_balanced: e.target.checked,
		});
		onChange();
	};

	return <Checkbox checked={is_balanced} onChange={handleChange} />;
};

export default BalancedToggle;
