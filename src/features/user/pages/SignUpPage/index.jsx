import { Container, Grid, GridColumn, Section, Flex } from "@/components";
import React from "react";
import { SignUpPageStyle } from "./style";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSignUp from "./FormSignUp";
import { useMounted } from "@/hooks";
import { Heading } from "@/components";
import { useForm } from "react-hook-form";

const index = () => {
	const schema = Yup.object().shape({
		fullName: Yup.string().min(4, "Must be least 4 characters").required("Please fill out your name"),
		email: Yup.string().email("Email is invalid").required("Please fill out your email"),
		password: Yup.string()
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Password is not strong enough")
			.required("Please fill out your password"),
	});

	const {
		handleSubmit,
		control,
		formState: { isValid, isSubmitting },
	} = useForm({
		defaultValues: {
			fullName: "",
		},
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onSubmit = async (values) => {
		const res = await new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(JSON.stringify(values));
				resolve();
			}, 5000);
		});
	};

	const updateTitle = () => {
		document.title = "Sign Up";
	};

	useMounted(updateTitle, []);

	return (
		<Section top='5rem' bottom='5rem'>
			<Container>
				<SignUpPageStyle>
					<Grid>
						<GridColumn columnStart={3} columnEnd={11}>
							<Flex flow='column nowrap'>
								<Flex alignItems='center' justifyContext='center'>
									<a href='/'>
										<img width='121' src='/images/logo.png' alt='Monkey Blogging Logo' />
									</a>
								</Flex>
								<Heading direction='center'>Sign Up Page</Heading>
								<FormSignUp onSubmit={handleSubmit(onSubmit)} control={control} isSubmitting={isSubmitting} />
							</Flex>
						</GridColumn>
					</Grid>
				</SignUpPageStyle>
			</Container>
		</Section>
	);
};

export default index;
