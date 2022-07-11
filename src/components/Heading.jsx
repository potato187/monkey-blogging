import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const HeadingStyled = styled.h1`
	${({ direction, margin, theme }) => css`
		width: 100%;
		font-size: 3.2rem;
		font-weight: 700;
		color: ${theme.primary};
		text-align: ${direction};
		margin: ${margin};
		text-transform: capitalize;
	`};
`;

const Heading = ({ direction = "start", margin = "1.5rem 0", children, ...restProps }) => {
	return (
		<HeadingStyled direction={direction} margin={margin} {...restProps}>
			{children}
		</HeadingStyled>
	);
};

Heading.propTypes = {
	direction: PropTypes.string,
	margin: PropTypes.string,
};

export default Heading;
