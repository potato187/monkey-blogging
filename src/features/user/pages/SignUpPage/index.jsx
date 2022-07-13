import { Container, Flex, Grid, GridColumn, Heading, Section } from "@/components";
import { useMounted } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormSignUp from "./FormSignUp";
import { SignUpPageStyle } from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

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
		if (!isValid) return false;

		try {
			const response = await createUserWithEmailAndPassword(auth, values["fullName"], values["password"]);
		} catch (error) {
			console.log(error);
		}
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
