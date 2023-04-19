import React, { useEffect, useState } from 'react';
import LogEntry from '../LogEntry/LogEntry.jsx';

const ExpenseLog = ({}) => {
	const [log, setlog] = useState([]);

	const fetchLog = async () => {
		const response = await fetch('http://localhost:5000/api/entries');
		const json = await response.json();
		setlog(json);
	};

	useEffect(() => {
		fetchLog();
	}, []);

	const logEntries = log.map((entry) => <LogEntry key={`entry-${entry.id}`} entry={entry} />);

	return <div>{logEntries}</div>;
};

export default ExpenseLog;
