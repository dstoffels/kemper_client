import React from 'react';
import IconBtnForm from '../IconBtnForm/IconBtnForm.jsx';
import { AddCircle } from '@mui/icons-material';
import { TextField } from '@mui/material';
import useCustomForm from '@/hooks/useCustomForm.js';
import axios from 'axios';

const NewUserForm = ({ onChange }) => {
	const addUser = async (data) => {
		await axios.post('http://localhost:5000/api/users', data);
		onChange();
	};
	const { formData, handleChange, handleSubmit, reset } = useCustomForm(
		{ username: '', password: 'password' },
		addUser,
	);
	return (
		<IconBtnForm
			icon={<AddCircle fontSize='large' color='success' />}
			reset={reset}
			onSubmit={handleSubmit}
			tooltip='Add User'
		>
			<TextField
				name='username'
				label='User Name'
				value={formData.username}
				onChange={handleChange}
			/>
		</IconBtnForm>
	);
};

export default NewUserForm;
