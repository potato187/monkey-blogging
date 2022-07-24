import React from "react";
import PropTypes from "prop-types";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const NavigateItemStyled = styled(NavLink)``;

const NavigateItem = ({ children, ...props }) => {
	return <NavigateItemStyled {...props}>{children}</NavigateItemStyled>;
};

NavigateItem.propTypes = {};

export default NavigateItem;
