import React from 'react';
import {
	Stack,
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import NewCategoryForm from '../NewCategoryForm/NewCategoryForm.jsx';
import NewUserForm from '../NewUserForm/NewUserForm.jsx';

const TotalsPanel = ({ expenses = [], categories = [], users = [], onChange }) => {
	const categoryRows = categories.map((category) => (
		<TableRow key={`cat-row-${category.id}`}>
			<TableCell>{category.name}</TableCell>
			<TableCell align='right'>
				{expenses.reduce(
					(sum, expense) => (expense.category === category.name ? sum + expense.amount : sum),
					0,
				)}
			</TableCell>
		</TableRow>
	));

	const userRows = users.map((user) => (
		<TableRow key={`user-row-${user.id}`}>
			<TableCell>{user.username}</TableCell>
			<TableCell align='right'>
				{expenses.reduce(
					(sum, expense) =>
						expense.user === user.username && !expense.is_balanced ? sum + expense.amount : sum,
					0,
				)}
			</TableCell>
		</TableRow>
	));

	return (
		<Stack spacing={2}>
			<div>
				<Stack direction='row' justifyContent='space-between' alignItems='center'>
					<Typography variant='h6'>Categories</Typography>
					<NewCategoryForm onChange={onChange} />
				</Stack>
				<Table>
					<TableBody>{categoryRows}</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell align='right'>Total</TableCell>
							<TableCell align='right'>
								{expenses.reduce((sum, expense) => sum + expense.amount, 0)}
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
			<div>
				<Stack direction='row' justifyContent='space-between' alignItems='center'>
					<Typography variant='h6'>Cunts</Typography>
					<NewUserForm onChange={onChange} />
				</Stack>
				<Table>
					<TableBody>{userRows}</TableBody>
				</Table>
			</div>
		</Stack>
	);
};

export default TotalsPanel;
