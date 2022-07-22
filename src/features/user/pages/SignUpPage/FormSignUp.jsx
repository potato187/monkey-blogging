import { Button, Flex } from "@/components";
import PropTypes from "prop-types";
import React from "react";
import { Field } from "../components";

const FormSignUp = ({ control = {}, isSubmitting = false, ...restProps }) => {
	return (
		<form {...restProps} noValidate>
			<Field control={control} name='fullName'>
				<Field.Label>Full Name</Field.Label>
				<Field.Input type='text' placeholder='Enter your full name' />
			</Field>
			<Field control={control} name='email'>
				<Field.Label>Email</Field.Label>
				<Field.Input type='email' placeholder='Enter your email' />
			</Field>
			<Field control={control} name='password' hasIcon={true}>
				<Field.Label>Password</Field.Label>
				<Field.Input type='password' placeholder='Enter your password'>
					<Field.Icon.IconPassword />
				</Field.Input>
			</Field>
			<Flex justifyContext='center'>
				<Button type='submit' isLoading={isSubmitting} disabled={isSubmitting}>
					Sign Up
				</Button>
			</Flex>
		</form>
	);
};

FormSignUp.propTypes = {
	control: PropTypes.object.isRequired,
	isSubmitting: PropTypes.bool,
};

export default FormSignUp;
