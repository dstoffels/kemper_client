import React, { useState } from 'react';
import LogEntry from '../LogEntry/LogEntry.jsx';
import {
	MenuItem,
	Select,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import NewExpenseForm from '../NewExpenseForm/NewExpenseForm.jsx';
import moment from 'moment';

const ExpenseLog = ({ expenses, categories, users, onChange }) => {
	const [yearFilter, setYearFilter] = useState(moment().year());

	expenses = expenses.filter(({ timestamp }) => moment(timestamp).year() === yearFilter);

	const expenseLog = expenses.map((entry) => (
		<LogEntry key={`entry-${entry.id}`} entry={entry} onChange={onChange} categories={categories} />
	));

	const yearOptions = expenses
		.reduce((years, expense) => {
			const year = moment(expense.timestamp).year();
			!years.includes(year) && years.push(year);
			return years;
		}, [])
		.map((year) => (
			<MenuItem key={`exp-yr-${year}`} value={year}>
				{year}
			</MenuItem>
		));
	return (
		<div>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography variant='h6'>Expenses</Typography>
				<NewExpenseForm users={users} categories={categories} onChange={onChange} />
			</Stack>
			<Table size='small' stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>
							<Stack direction='row' justifyContent='space-between' alignItems='center'>
								<p>Date</p>
								<Select
									variant='outlined'
									size='small'
									value={yearFilter}
									onChange={(e) => setYearFilter(e.target.value)}
								>
									{yearOptions}
								</Select>
							</Stack>
						</TableCell>
						<TableCell>
							<p>Category</p>
						</TableCell>
						<TableCell>
							<p>Description</p>
						</TableCell>
						<TableCell>
							<p>Vendor</p>
						</TableCell>
						<TableCell>
							<p>Amount</p>
						</TableCell>
						<TableCell>
							<p>Purchaser</p>
						</TableCell>
						<TableCell padding='checkbox'>
							<p>Balanced</p>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{expenseLog}</TableBody>
			</Table>
		</div>
	);
};

export default ExpenseLog;
