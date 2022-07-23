import PropTypes, { element } from "prop-types";
import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9998;
	transition: all 0.7s linear 0.35s;
	pointer-events: none;
	background: linear-gradient(180deg, #70685dcc 0, #4a575fcc 100%);
	mix-blend-mode: multiply;
`;

const createPortalWrapper = (idElement) => {
	const node = document.createElement("div");
	node.id = idElement;
	document.body.appendChild(node);
	return node;
};

const index = ({ idElement = "portal-wrapper", children }) => {
	const [portal, setPortal] = useState(null);

	useLayoutEffect(() => {
		let element = document.getElementById(idElement);
		if (!element) {
			element = createPortalWrapper(idElement);
		}
		setPortal(element);
	}, [idElement]);

	if (portal === null) return <></>;

	return createPortal(
		<>
			{children}
			<OverlayStyled />
		</>,
		portal
	);
};

index.propTypes = {
	id: PropTypes.string,
};

export default index;
