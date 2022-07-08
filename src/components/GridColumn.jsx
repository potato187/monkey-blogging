import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GridColumnStyled = styled.div`
	grid-column-start: ${(props) => props.columnStart};
	grid-column-end: ${(props) => props.columnEnd};
`;

const GridColumn = ({ columnStart, columnEnd, children, ...rest }) => {
	return (
		<GridColumnStyled columnStart={columnStart} columnEnd={columnEnd} {...rest}>
			{children}
		</GridColumnStyled>
	);
};

GridColumn.propTypes = {
	columnStart: PropTypes.number,
	columnEnd: PropTypes.number,
	children: PropTypes.node,
};

export default GridColumn;
