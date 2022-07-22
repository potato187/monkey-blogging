import { Button, Flex } from "@/components";
import PropTypes from "prop-types";
import React from "react";
import { Field } from "../components";

const FormSignIn = ({ control = {}, isSubmitting = false, ...props }) => {
	return (
		<form {...props} noValidate>
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
					Sign In
				</Button>
			</Flex>
		</form>
	);
};

FormSignIn.propTypes = {
	control: PropTypes.object.isRequired,
	isSubmitting: PropTypes.bool,
};

export default FormSignIn;
