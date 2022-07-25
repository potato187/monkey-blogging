import { useToggle } from "@/contexts/toggleContext";
import { useOutsideAlerter } from "@/hooks";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

const DashboardStyled = styled.div`
	border-radius: 0.8rem;
	padding: 0.8rem 2.4rem;
	position: absolute;
	top: calc(100% + 1rem);
	left: 50%;
	transform: translateX(-50%);
	z-index: 100;
	background-color: #ffffff;
	border-radius: 1rem;
	box-shadow: 0 -4px 16px rgb(0 0 0 / 20%);
`;

const DashBoard = ({ coords = {}, children, ...props }) => {
	const { toggle } = useToggle();

	return (
		<CSSTransition in={toggle} timeout={300} unmountOnExit classNames='modal'>
			<DashboardStyled {...props}>{children}</DashboardStyled>
		</CSSTransition>
	);
};

DashBoard.propTypes = {
	coords: PropTypes.object,
};

export default DashBoard;
