import React, { createElement } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ButtonSize = { default: 1, medium: 1.1, large: 1.2 };

const ButtonStyle = styled(({ element, children, ...props }) => {
	if (typeof element === "object") {
		const Component = element;
		return <Component {...props}>{children}</Component>;
	}

	return createElement(element, props, children);
})`
	${({ size = "default", outline = 0, theme }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: ${(ButtonSize[size] * 4.2).toFixed(1)}rem;
		padding: 0 ${(ButtonSize[size] * 2).toFixed(1)}rem;
		color: ${!!outline ? theme.primary : "#ffffff"};
		text-decoration: none;
		border: 2px solid ${!!outline ? theme.primary : "transparent"};
		border-radius: 0.4rem;
		cursor: pointer;
		white-space: nowrap;
		background-color: ${!!outline ? "transparent" : theme.primary};
		transition: 0.25s ease-in-out;
		transition-property: background-color, color;
	`}
`;

const CustomButton = ({ element = "button", children, ...rest }) => {
	return (
		<ButtonStyle element={element} {...rest}>
			{children}
		</ButtonStyle>
	);
};

CustomButton.propTypes = {
	element: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default CustomButton;
