import React from 'react';
import IconBtnForm from '../IconBtnForm/IconBtnForm.jsx';
import { AddCircle } from '@mui/icons-material';
import { TextField } from '@mui/material';
import useCustomForm from '@/hooks/useCustomForm.js';
import axios from 'axios';

const NewCategoryForm = ({ onChange }) => {
	const addCategory = async (data) => {
		await axios.post('http://localhost:5000/api/categories', data);
		onChange();
	};
	const { formData, handleChange, handleSubmit, reset } = useCustomForm({ name: '' }, addCategory);
	return (
		<IconBtnForm
			icon={<AddCircle fontSize='large' color='success' />}
			reset={reset}
			onSubmit={handleSubmit}
			tooltip='Add Category'
		>
			<TextField name='name' label='Expense Name' value={formData.name} onChange={handleChange} />
		</IconBtnForm>
	);
};

export default NewCategoryForm;
