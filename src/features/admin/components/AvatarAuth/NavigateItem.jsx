import React from "react";
import PropTypes from "prop-types";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const NavigateItemStyled = styled(NavLink)`
	display: block;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	text-decoration: none;
	color: #666;
	font-size: 1.4rem;

	& + & {
		padding-top: 1.5rem;
		margin-top: 0.5rem;
		border-top: 1px solid #0000000d;
	}
`;

const NavigateItem = ({ children, ...props }) => {
	return <NavigateItemStyled {...props}>{children}</NavigateItemStyled>;
};

NavigateItem.propTypes = {};

export default NavigateItem;
