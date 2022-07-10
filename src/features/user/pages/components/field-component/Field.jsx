import React from "react";
import PropTypes from "prop-types";
import FieldContext from "../../context/ContextField";
import Label from "./Label";
import Input from "./Input";
import styled from "styled-components";
import Icon from "./Icon";

const FieldStyled = styled.div`
	position: relative;
	margin-bottom: 3rem;
`;

const Field = ({ control, name, children, ...restProps }) => {
	return (
		<FieldContext control={control} name={name} {...restProps}>
			<FieldStyled>{children}</FieldStyled>
		</FieldContext>
	);
};

Field.Label = Label;
Field.Input = Input;
Field.Icon = Icon;

Field.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
};

export default Field;
