import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const GridColumnStyled = styled.div`
	${({ columnStart = -1, columnEnd = 1, justifySelf = "flex-start", alignSelf = "stretch" }) => css`
		grid-column-start: ${columnStart};
		grid-column-end: ${columnEnd};
		justify-self: ${justifySelf};
		align-self: ${alignSelf};
	`};
`;

const GridColumn = ({ children, ...rest }) => {
	return <GridColumnStyled {...rest}>{children}</GridColumnStyled>;
};

GridColumn.propTypes = {
	children: PropTypes.node,
};

export default GridColumn;
