import useEscKey from '@/hooks/useEscKey.js';
import useOutsideClick from '@/hooks/useOutsideClick.js';
import { Close, Done } from '@mui/icons-material';
import { Button, IconButton, Stack, TextField, Tooltip } from '@mui/material';
import React, { useRef, useState } from 'react';

const EditField = ({
	label = '',
	initValue = '',
	onSubmit,
	name = '',
	type = 'text',
	canEdit = true,
}) => {
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(initValue);

	const handleClick = () => canEdit && !editing && setEditing(true);
	const handleCancel = () => setEditing(false);
	const handleClose = () => {
		setValue(initValue);
		handleCancel();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ [name]: value });
		handleClose();
	};

	useEscKey(handleClose);

	const ref = useRef(null);
	useOutsideClick(ref, handleClose);

	return (
		<>
			{editing ? (
				<form ref={ref} onSubmit={handleSubmit}>
					<Stack direction='row'>
						<TextField
							size='small'
							variant='standard'
							name={name}
							autoFocus
							type={type}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Tooltip title='Done'>
							<IconButton color='success' type='submit'>
								<Done />
							</IconButton>
						</Tooltip>
						<Tooltip title='Close'>
							<IconButton color='error' type='button' onClick={handleClose}>
								<Close />
							</IconButton>
						</Tooltip>
					</Stack>
				</form>
			) : (
				<div className={canEdit ? 'edit-field' : ''} onClick={handleClick}>
					{initValue}
				</div>
			)}
		</>
	);
};

export default EditField;
