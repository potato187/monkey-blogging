import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoadingIconStyled = styled.span`
	display: inline-block;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	border: 2px solid rgba(255, 255, 255, 0.75);
	border-top-color: transparent;
	border-bottom-color: transparent;
	transform-origin: center center;
	animation: spin360 infinite 1s ease-in-out forwards running;
`;

const LoadingIcon = () => {
	return <LoadingIconStyled />;
};

LoadingIcon.propTypes = {};

export default LoadingIcon;
