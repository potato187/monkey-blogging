import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const GridColumnStyled = styled.div`
	${({ columnStart = -1, columnEnd = 1, justifySelf = "auto", alignSelf = "stretch" }) => css`
		grid-column-start: ${columnStart};
		grid-column-end: ${columnEnd};
		justify-self: ${justifySelf};
		align-self: ${alignSelf};
	`};
`;

const index = ({ children, ...rest }) => {
	return <GridColumnStyled {...rest}>{children}</GridColumnStyled>;
};

index.propTypes = {
	children: PropTypes.node,
};

export default index;
