import { Container, Grid, GridColumn, Section } from "@/components";
import React from "react";
import { SignUpPageStyle } from "./style";

import FormSignUp from "./FormSignUp";

const index = () => {
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
								<FormSignUp onSubmit={onSubmit} />
							</div>
						</GridColumn>
					</Grid>
				</SignUpPageStyle>
			</Container>
		</Section>
	);
};

export default index;
