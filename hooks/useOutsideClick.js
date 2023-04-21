import React, { useEffect, useState } from 'react';

const useOutsideClick = (ref, callback) => {
	const [canCall, setCanCall] = useState(true);

	function handleOutsideClick(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			canCall && callback(true);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);

		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, [ref, canCall]);

	const setCanCallTrue = () => setCanCall(true);
	const setCanCallFalse = () => setCanCall(false);

	return [setCanCallTrue, setCanCallFalse];
};

export default useOutsideClick;
