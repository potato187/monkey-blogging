import { CustomButton } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Field } from "../components";

const FormSignUp = ({ onSubmit = null }) => {
	const schema = Yup.object().shape({
		fullName: Yup.string().min(4, "Must be least 4 characters").required("Please fill out your name"),
		email: Yup.string().email("Email is invalid").required("Please fill out your email"),
		password: Yup.string()
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Password is not strong enough")
			.required("Please fill out your password"),
	});

	const handleOnSubmit = (values) => {
		if (onSubmit) {
			onSubmit(values);
		}
	};

	const { handleSubmit, control } = useForm({
		defaultValues: {
			fullName: "",
		},
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
			<Field control={control} name='fullName'>
				<Field.Label>Full Name</Field.Label>
				<Field.Input type='text' placeholder='Enter your full name'>
					<Field.Icon.IconPassword />
				</Field.Input>
			</Field>
			<Field control={control} name='email'>
				<Field.Label>Email</Field.Label>
				<Field.Input type='email' placeholder='Enter your full name' />
			</Field>
			<CustomButton size='large' type='submit'>
				Sign Up
			</CustomButton>
		</form>
	);
};

FormSignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default FormSignUp;
