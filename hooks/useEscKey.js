import { useEffect } from 'react';

const useEscKey = callback => {
	function escKeyDown(e) {
		if (e.key === 'Escape') callback();
	}

	useEffect(() => {
		document.addEventListener('keydown', escKeyDown);
		return () => document.removeEventListener('keydown', escKeyDown);
	}, []);
};

export default useEscKey;
