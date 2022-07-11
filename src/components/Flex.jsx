import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FlexStyled = styled.div`
	${({ inline, flow, alignItems, justifyContext }) => css`
		display: ${inline ? "inline-flex" : "flex"};
		flex-flow: ${flow};
		align-items: ${alignItems};
		justify-content: ${justifyContext};
		width: 100%;
	`};
`;

const Flex = ({
	inline = false,
	flow = "row nowrap",
	alignItems = "stretch",
	justifyContext = "flex-start",
	children,
	...restProps
}) => {
	return (
		<FlexStyled inline={inline} flow={flow} alignItems={alignItems} justifyContext={justifyContext} {...restProps}>
			{children}
		</FlexStyled>
	);
};

Flex.propTypes = {
	inline: PropTypes.bool,
	flow: PropTypes.string,
	alignItems: PropTypes.string,
	justifyContext: PropTypes.string,
};

export default Flex;
