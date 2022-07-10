import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { CustomField } from "../components";
import { CustomButton } from "@/components";
import { Link } from "react-router-dom";

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
			<CustomField
				control={control}
				type='text'
				name='fullName'
				label='Full name'
				placeholder='Please enter your full name'
			/>
			<CustomField control={control} type='email' name='email' label='Email' placeholder='Please enter your email' />
			<CustomField
				control={control}
				type='password'
				name='password'
				label='Password'
				placeholder='Please enter your password'
			/>
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
