import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Heading, Card, Button, ButtonOutline, Label, Input, Box, Small } from 'rebass';

const validate = values => {
	const errors = {};
	if (!values.username) {
		errors.username = 'Required';
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.age) {
		errors.age = 'Required';
	} else if (isNaN(Number(values.age))) {
		errors.age = 'Must be a number';
	} else if (Number(values.age) < 18) {
		errors.age = 'Sorry, you must be at least 18 years old';
	}
	return errors;
};

const warn = values => {
	const warnings = {};
	if (values.age < 19) {
		warnings.age = 'Hmm, you seem a bit young...';
	}
	return warnings;
};

/* eslint-disable react/prop-types */
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<Box mb={20}>
		<Label>{label}</Label>
		<Input {...input} placeholder={label} type={type} />
		{touched &&
			((error && <Small fontWeight="bold">{error}</Small>) ||
				(warning && <Small fontWeight="bold">{warning}</Small>))}

	</Box>
);
/* eslint-enable react/prop-types */

const SyncValidationForm = ({ handleSubmit, pristine, reset, submitting }) => (
	<Card>
		<form onSubmit={handleSubmit}>
			<Heading>Example Rebass Form!!!!</Heading>
			<Field
				name="username" type="text" component={renderField}
				label="Username"
			/>
			<Field
				name="email" type="email" component={renderField}
				label="Email"
			/>
			<Field
				name="age" type="number" component={renderField}
				label="Age"
			/>
			<Box>
				<Button type="submit" disabled={submitting}>
					Submit
				</Button>
				<ButtonOutline type="button" disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</ButtonOutline>
			</Box>
		</form>
	</Card>
);

SyncValidationForm.propTypes = {
	handleSubmit: PropTypes.func,
	pristine: PropTypes.bool,
	reset: PropTypes.func,
	submitting: PropTypes.bool,
};

export default reduxForm({
	validate,
	warn,
})(SyncValidationForm);
