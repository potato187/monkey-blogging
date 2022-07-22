import { createElement } from "react";
import styled, { css } from "styled-components";

export const ButtonStyle = styled(({ element, children, ...props }) => {
	if (typeof element === "object") {
		const Component = element;
		return <Component {...props}>{children}</Component>;
	}

	return createElement(element, props, children);
})`
	${({ outline = 0, theme }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 6rem;
		padding: 0 2rem;
		min-width: 12rem;
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
	&[disabled] {
		user-select: none;
		pointer-events: none;
		opacity: 0.75;
	}
`;
