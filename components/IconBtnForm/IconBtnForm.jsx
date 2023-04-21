import { Button, IconButton, Popover, Stack, Tooltip } from '@mui/material';
import React, { useState } from 'react';

const IconBtnForm = ({
	icon,
	onSubmit = () => {},
	children,
	reset = () => {},
	submitBtnTxt = 'Add',
	tooltip = '',
}) => {
	const [anchor, setAnchor] = useState(null);

	const handleClick = (e) => setAnchor(e.currentTarget);

	const handleClose = () => {
		setAnchor(null);
		reset();
	};

	const handleSubmit = (e) => {
		onSubmit(e);
		handleClose();
	};

	const open = Boolean(anchor);

	return (
		<div>
			<Tooltip title={tooltip}>
				<IconButton onClick={handleClick}>{icon}</IconButton>
			</Tooltip>
			<Popover open={open} anchorEl={anchor} onClose={handleClose}>
				<form onSubmit={handleSubmit}>
					<Stack spacing={2} padding={2}>
						{children}
						<Button variant='contained' type='submit'>
							{submitBtnTxt}
						</Button>
						<Button variant='contained' color='error' onClick={handleClose}>
							Cancel
						</Button>
					</Stack>
				</form>
			</Popover>
		</div>
	);
};

export default IconBtnForm;
