import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { useField } from "../../context/ContextField";
import styled, { css } from "styled-components";

const MessageError = styled.div`
	${({ theme: { input } }) => css`
		display: inline-block;
		font-size: 1.4rem;
		color: ${input.error};
		position: absolute;
		left: 0;
		bottom: 0;
		opacity: 0;
		visibility: hidden;
		transition: 0.25s ease-in-out;
		transition-property: opacity, visibility;
	`}
`;

const InputStyled = styled.div`
	${({ hasIcon, theme }) => css`
		position: relative;
		z-index: 1;

		> input {
			width: 100%;
			padding: ${hasIcon ? "0 6rem 0 2rem" : "0 2rem"};
			height: 5rem;
			border-radius: 0.4rem;
			border: 1px solid transparent;
			outline: none;
			position: relative;
			z-index: 2;
			background-color: ${theme.grayLight};
		}
	`};

	${({ invalid, theme: { input } }) =>
		invalid &&
		css`
			${MessageError} {
				opacity: 1;
				visibility: visible;
			}
		`};
`;

const Input = ({ children, ...restProps }) => {
	const { control, id, name, hasIcon, visible } = useField();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=''
			render={({ field, fieldState: { isValid, isTouched, error } }) => (
				<InputStyled invalid={!isValid} hasIcon={hasIcon}>
					<input id={id} {...field} {...restProps} type={visible ? "text" : "password"} />
					{!isValid && isTouched && <MessageError>{error?.message}</MessageError>}
					{children}
				</InputStyled>
			)}
		/>
	);
};

Input.propTypes = {};

export default Input;
