import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const SectionStyled = styled.section`
	${({ top, left, bottom, right }) => css`
		padding-top: ${top ?? "initial"};
		padding-left: ${left ?? "initial"};
		padding-bottom: ${bottom ?? "initial"};
		padding-right: ${left ?? "initial"};
	`};
`;

const Section = ({ top, left, bottom, right, children, ...rest }) => {
	return (
		<SectionStyled top={top} left={left} bottom={bottom} right={right} {...rest}>
			{children}
		</SectionStyled>
	);
};

Section.propTypes = {
	top: PropTypes.string,
	left: PropTypes.string,
	bottom: PropTypes.string,
	right: PropTypes.string,
};

export default Section;
