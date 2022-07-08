import React from "react";
import { Container, Grid, GridColumn, Section } from "@/components";
import { SignUpPageStyle } from "./style";
import { useForm } from "react-hook-form";
import { CustomField } from "../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const index = () => {
	const schema = Yup.object().shape({
		fullName: Yup.string().min(4, "Must be least 4 characters").required("Please fill out your name"),
	});

	const { handleSubmit, control } = useForm({
		defaultValues: {
			fullName: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Section top='5rem' bottom='5rem'>
			<Container>
				<SignUpPageStyle>
					<Grid>
						<GridColumn columnStart={3} columnEnd={11}>
							<div className='page-wrapper'>
								<div className='logo'>
									<a href='/'>
										<img width='121' src='/images/logo.png' alt='Monkey Blogging Logo' />
									</a>
								</div>
								<h1>Sign up page</h1>
								<form onSubmit={handleSubmit(onSubmit)}>
									<CustomField
										control={control}
										type='text'
										name='fullName'
										label='Full name'
										placeholder='Please enter your full name'
									/>
									<button type='submit'>submit</button>
								</form>
							</div>
						</GridColumn>
					</Grid>
				</SignUpPageStyle>
			</Container>
		</Section>
	);
};

export default index;
