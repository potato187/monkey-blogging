import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContainerStyle = styled.div`
	width: 100%;
	max-width: 1320px;
	padding-left: 15px;
	padding-right: 15px;
	margin: 0 auto;
`;

const Container = ({ children }) => {
	return <ContainerStyle>{children}</ContainerStyle>;
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
