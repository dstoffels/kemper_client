import React from 'react';
import EditField from '../EditField/EditField.jsx';
import moment from 'moment/moment.js';

const LogEntry = ({ entry }) => {
	const date = moment(entry.timestamp).format('ddd, MM-DD-YYYY');
	return (
		<div className='flex flex-row justify-between'>
			<div className='w-full'>{date}</div>
			<EditField label='Description' initValue={entry.description} />
			<EditField label='Vendor' initValue={entry.vendor} />
		</div>
	);
};

export default LogEntry;
