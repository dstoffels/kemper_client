import React, { useState } from 'react';
import EditField from '../EditField/EditField.jsx';
import moment from 'moment/moment.js';
import CategorySelect from '../CategorySelect/CategorySelect.jsx';
import axios from 'axios';
import BalancedToggle from '../BalancedToggle/BalancedToggle.jsx';
import { TableCell, TableRow } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import IconBtnForm from '../IconBtnForm/IconBtnForm.jsx';

const LogEntry = ({ entry, users, categories, onChange }) => {
	const date = moment(entry.timestamp).format('DD MMM YYYY');
	const [deleteMode, setDeleteMode] = useState(false);

	const handlePatch = async (formData) => {
		const response = await axios.patch(`http://localhost:5000/api/expenses/${entry.id}`, formData);
		onChange();
	};

	return (
		<TableRow hover>
			<TableCell>{date}</TableCell>
			<TableCell>
				<CategorySelect
					category={entry.category}
					categories={categories}
					entry_id={entry.id}
					onChange={onChange}
				/>
			</TableCell>
			<TableCell>
				<EditField
					name='description'
					label='Description'
					initValue={entry.description}
					onSubmit={handlePatch}
				/>
			</TableCell>
			<TableCell>
				<EditField name='vendor' label='Vendor' initValue={entry.vendor} onSubmit={handlePatch} />
			</TableCell>
			<TableCell>
				<EditField name='amount' initValue={entry.amount} onSubmit={handlePatch} />
			</TableCell>
			<TableCell>{entry.user}</TableCell>
			<TableCell padding='checkbox' align='center'>
				<BalancedToggle entry_id={entry.id} is_balanced={entry.is_balanced} onChange={onChange} />
			</TableCell>
		</TableRow>
	);
};

export default LogEntry;
