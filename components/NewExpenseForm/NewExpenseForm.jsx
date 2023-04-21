import React from 'react';
import IconBtnForm from '../IconBtnForm/IconBtnForm.jsx';
import { AddCircle } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import useCustomForm from '@/hooks/useCustomForm.js';
import axios from 'axios';

const NewExpenseForm = ({ users = [], categories = [], onChange }) => {
	const initValues = {
		description: '',
		vendor: '',
		amount: 0.0,
		user: users[0],
		category: categories[0],
	};

	async function addExpense(data) {
		const { description, vendor, amount } = data;
		data = { description, vendor, amount, user_id: data.user.id, category_id: data.category.id };
		const response = await axios.post('http://localhost:5000/api/expenses', data);
		onChange();
	}
	const { formData, handleChange, handleSubmit, reset } = useCustomForm(initValues, addExpense);

	const userOptions = users.map((user) => (
		<MenuItem key={`user-${user.id}`} value={user}>
			{user.username}
		</MenuItem>
	));
	const categoryOptions = categories.map((category) => (
		<MenuItem key={`user-${category.id}`} value={category}>
			{category.name}
		</MenuItem>
	));

	return (
		<IconBtnForm
			icon={<AddCircle fontSize='large' color='success' />}
			onSubmit={handleSubmit}
			reset={reset}
			tooltip='Add Expense'
		>
			<FormControl>
				<InputLabel>Category</InputLabel>
				<Select value={formData.category} name='category' onChange={handleChange} label='Purchaser'>
					{categoryOptions}
				</Select>
			</FormControl>
			<TextField
				required
				label='Description'
				name='description'
				value={formData.description}
				onChange={handleChange}
			/>
			<TextField
				required
				label='Vendor'
				name='vendor'
				value={formData.vendor}
				onChange={handleChange}
			/>
			<TextField
				required
				type='number'
				inputProps={{ step: '0.01' }}
				label='Amount'
				name='amount'
				value={formData.amount}
				onChange={handleChange}
			/>
			<FormControl>
				<InputLabel>Purchaser</InputLabel>
				<Select value={formData.user} name='user' onChange={handleChange} label='Purchaser'>
					{userOptions}
				</Select>
			</FormControl>
		</IconBtnForm>
	);
};

export default NewExpenseForm;
