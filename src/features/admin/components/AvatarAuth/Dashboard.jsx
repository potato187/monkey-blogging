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
`;

const DashBoard = ({ coords = {}, children, ...props }) => {
	const { toggle } = useToggle();

	return (
		<CSSTransition in={toggle} timeout={300} unmountOnExit classNames='modal'>
			<DashboardStyled
				left={coords?.left}
				top={coords?.top + coords?.height + window?.scrollY}
				width={coords?.width}
				{...props}
			>
				{children}
			</DashboardStyled>
		</CSSTransition>
	);
};

DashBoard.propTypes = {
	coords: PropTypes.object,
};

export default DashBoard;
