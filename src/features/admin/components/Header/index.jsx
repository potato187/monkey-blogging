import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Container, Grid, GridColumn, Button } from "@/components";
import { NavLink } from "react-router-dom";
import { GLOBAL } from "@/constant";
import AvatarAuth from "../AvatarAuth";

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

const WrapperLogoStyled = styled(GridColumn)`
	padding-left: 1.6rem;
`;

const WrapperNavStyled = styled(GridColumn)`
	padding-r: 1.6rem;
`;

const index = ({}) => {
	return (
		<HeaderStyled>
			<Container>
				<Grid>
					<WrapperLogoStyled columnStart={1} columnEnd={3}>
						<LogoStyled to='/'>
							<img loading='lazy' width='43' height='56' src={GLOBAL.LOGO} alt={GLOBAL.APP_NAME} />
						</LogoStyled>
					</WrapperLogoStyled>
					<WrapperNavStyled columnStart={3} columnEnd={13} justifySelf='flex-end' alignSelf='center'>
						<AvatarAuth>
							<AvatarAuth.Avatar />
							<AvatarAuth.Dashboard>toggle</AvatarAuth.Dashboard>
						</AvatarAuth>
					</WrapperNavStyled>
				</Grid>
			</Container>
		</HeaderStyled>
	);
};

index.propTypes = {};

export default index;
