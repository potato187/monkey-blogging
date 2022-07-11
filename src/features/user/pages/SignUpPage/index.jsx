import { Container, Grid, GridColumn, Section, Flex } from "@/components";
import React from "react";
import { SignUpPageStyle } from "./style";

import FormSignUp from "./FormSignUp";
import { useMounted } from "@/hooks";
import { Heading } from "../../../../components";

const index = () => {
	const onSubmit = (values) => {
		console.log(values);
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
								<FormSignUp onSubmit={onSubmit} />
							</Flex>
						</GridColumn>
					</Grid>
				</SignUpPageStyle>
			</Container>
		</Section>
	);
};

export default index;
