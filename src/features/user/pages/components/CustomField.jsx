import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { useId } from "react";
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

const FiledStyled = styled.div`
	${({ theme: { input } }) => css`
		position: relative;
		padding-bottom: 2rem;
		margin-bottom: 1rem;

		> label {
			display: block;
			font-size: 1.4rem;
			font-weight: 600;
			color: ${input.label};
			margin-bottom: 0.5rem;
		}

		> input {
			width: 100%;
			padding: 1.5rem 2rem;
			font-size: 1.4rem;
			font-weight: 500;
			background-color: ${input.background};
			border: 1px solid ${input.default};
			border-radius: 0.4rem;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			outline: none;
			transition: border 0.25s ease-in-out;
		}

		> input::placeholder {
			font-weight: 400;
			color: ${input.placeHolder};
		}
	`};

	${({ invalid, theme: { input } }) =>
		invalid &&
		css`
			${MessageError} {
				opacity: 1;
				visibility: visible;
			}

			> input {
				border-color: ${input.error};
			}
		`};
`;

const CustomField = ({ control, name, label, ...rest }) => {
	const id = useId();
	return (
		<Controller
			control={control}
			name={name}
			defaultValue=''
			render={({ field, fieldState: { invalid, isTouched, error } }) => {
				return (
					<FiledStyled invalid={invalid && isTouched}>
						{label && <label htmlFor={id}>{label}</label>}
						<input id={id} {...field} {...rest} />
						<MessageError>{error?.message}</MessageError>
					</FiledStyled>
				);
			}}
		/>
	);
};

CustomField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
};

export default CustomField;
