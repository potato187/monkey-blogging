import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GridStyled = styled.div`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.columns}, minmax(0, 1fr))`};
	grid-gap: ${(props) =>
		`${props.theme.spacingRatio * props.gapColumn}px ${props.theme.spacingRatio * props.gapRow}px`};
`;

const Grid = ({ columns = 12, gapColumn = 0, gapRow = 0, children, ...rest }) => {
	return (
		<GridStyled columns={columns} gapColumn={gapColumn} gapRow={gapRow} {...rest}>
			{children}
		</GridStyled>
	);
};

Grid.propTypes = {
	children: PropTypes.node,
	columns: PropTypes.number,
	gapColumn: PropTypes.number,
	gapRow: PropTypes.number,
};

export default Grid;
