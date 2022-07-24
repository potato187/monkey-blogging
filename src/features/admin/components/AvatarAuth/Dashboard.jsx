import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useMounted } from "@/hooks";
import { useToggle } from "@/contexts/toggleContext";

const DashboardStyled = styled.div`
	border-radius: 0.8rem;
	padding: 0.8rem 2.4rem;
	position: fixed;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	user-select: none;
	z-index: -1;
	background-color: #ffffff;
	${({ width, top = 0, left = 0 }) => css`
		top: ${top}px;
		left: ${left}px;
	`};

	${({ toggle }) =>
		toggle &&
		css`
			opacity: 1;
			visibility: visible;
			pointer-events: initial;
			user-select: initial;
			z-index: 9999;
		`};
`;

const DashBoard = ({ coords = {}, children, ...props }) => {
	const { toggle } = useToggle();
	return (
		<DashboardStyled
			toggle={toggle}
			left={coords?.left}
			top={coords?.top + coords?.height + window?.scrollY}
			width={coords?.width}
			{...props}
		>
			{children}
		</DashboardStyled>
	);
};

DashBoard.propTypes = {
	coords: PropTypes.object,
};

export default DashBoard;
