import ExpenseLog from '@/components/ExpenseLog/ExpenseLog.jsx';
import TotalsPanel from '@/components/TotalsPanel/TotalsPanel.jsx';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router.js';

const Home = ({ expenses = [], categories, users }) => {
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	return (
		<Grid container>
			<Grid item md={3} padding={2}>
				<TotalsPanel
					expenses={expenses}
					categories={categories}
					users={users}
					onChange={refreshData}
				/>
				{/* {users.map((user) => user.username)}
				<div>Total Expenses: {expenses.reduce((sum, expense) => sum + expense.amount, 0)}</div> */}
			</Grid>
			<Grid item md={9} padding={2}>
				<ExpenseLog
					expenses={expenses}
					categories={categories}
					users={users}
					onChange={refreshData}
				/>
			</Grid>
		</Grid>
	);
};

export default Home;

export async function getServerSideProps() {
	const exResponse = await axios.get('http://127.0.0.1:5000/api/expenses');
	const catResponse = await axios.get('http://127.0.0.1:5000/api/categories');
	const uResponse = await axios.get('http://127.0.0.1:5000/api/users');
	return {
		props: { expenses: exResponse.data, categories: catResponse.data, users: uResponse.data },
	};
}
