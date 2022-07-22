import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Container, Grid, GridColumn, CustomButton } from "@/components";
import { NavLink } from "react-router-dom";
import { GLOBAL } from "@/constant";
import { default as CardAuth } from "../CardAuth";

const HeaderStyled = styled.header`
	${(props) => css`
		padding: 1rem 0;
	`};
`;
const LogoStyled = styled(NavLink)`
	${(props) => css`
		display: block;
	`};
`;

const index = ({}) => {
	return (
		<HeaderStyled>
			<Container>
				<Grid>
					<GridColumn columnStart={1} columnEnd={3}>
						<LogoStyled to='/'>
							<img loading='lazy' width='43' height='56' src={GLOBAL.LOGO} alt={GLOBAL.APP_NAME} />
						</LogoStyled>
					</GridColumn>
					<GridColumn columnStart={3} columnEnd={12} justifySelf='flex-end' alignSelf='center'>
						<CardAuth />
					</GridColumn>
				</Grid>
			</Container>
		</HeaderStyled>
	);
};

index.propTypes = {};

export default index;
