import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DashboardStyled = styled.div`
	background-color: #fff;
	border-radius: 0.8rem;
	padding: 0.8rem 2.4rem;
`;

const DashBoard = ({ children, props }) => {
	return <DashboardStyled>{children}</DashboardStyled>;
};

DashBoard.propTypes = {};

export default DashBoard;
