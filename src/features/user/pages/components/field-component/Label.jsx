import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useField } from "../../context/ContextField";

const LabelStyled = styled.label`
	${({ theme }) => css`
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.6rem;
		font-weight: 600;
		text-transform: capitalize;
		color: ${theme.darkGray};
	`};
`;

const Label = ({ children, ...restProps }) => {
	const { id } = useField();
	return (
		<LabelStyled htmlFor={id} {...restProps}>
			{children}
		</LabelStyled>
	);
};

Label.propTypes = {};

export default Label;
