import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Container, Grid, GridColumn, Button, Portal } from "@/components";
import { NavLink } from "react-router-dom";
import { GLOBAL } from "@/constant";
import AvatarAuth from "../AvatarAuth";
import { useMounted } from "@/hooks";
import ToggleProvider from "@/contexts/toggleContext";
import { useOutsideAlerter } from "@/hooks";

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
	const nodeRef = useRef(null);
	useOutsideAlerter(nodeRef, () => {
		console.log("click outside");
	});
	const [coords, setCoords] = useState(null);

	const updateCoords = () => {
		const rect = nodeRef.current.getBoundingClientRect();
		setCoords(rect);
	};

	useMounted(() => {
		updateCoords();
		window.addEventListener("resize", updateCoords);

		return () => {
			window.removeEventListener("resize", updateCoords);
		};
	}, []);

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
						<ToggleProvider>
							<AvatarAuth nodeRef={nodeRef}>
								<AvatarAuth.Avatar />
								<Portal>
									<AvatarAuth.Dashboard coords={coords}>toggle</AvatarAuth.Dashboard>
								</Portal>
							</AvatarAuth>
						</ToggleProvider>
					</WrapperNavStyled>
				</Grid>
			</Container>
		</HeaderStyled>
	);
};

index.propTypes = {};

export default index;
