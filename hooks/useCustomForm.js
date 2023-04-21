import { useState } from 'react';

const useCustomForm = (initialValues = {}, onSubmit) => {
	const [formData, setFormValues] = useState(initialValues);

	const handleChange = (e) => {
		if (e.target.type === 'checkbox') {
			setFormValues({ ...formData, [e.target.name]: e.target.checked });
		} else {
			setFormValues({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const reset = () => {
		setFormValues(initialValues);
	};

	return { formData, handleChange, handleSubmit, reset };
};

export default useCustomForm;
