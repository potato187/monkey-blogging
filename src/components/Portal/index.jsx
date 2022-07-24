import PropTypes, { element } from "prop-types";
import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 100%;
	z-index: -1;
	transition: all 0.35s linear 0.1s;
	pointer-events: none;
	background: linear-gradient(180deg, #70685dcc 0, #4a575fcc 100%);
	mix-blend-mode: multiply;
	${({ toggle }) =>
		toggle &&
		css`
			bottom: 0;
			z-index: 9998;
			pointer-events: auto;
		`};
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
		let systemCreated = false;
		if (!element) {
			element = createPortalWrapper(idElement);
			systemCreated = true;
		}
		setPortal(element);

		return () => {
			if (systemCreated && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [idElement]);

	if (portal === null) return <></>;

	return createPortal(<>{children}</>, portal);
};

index.propTypes = {
	id: PropTypes.string,
};

export default index;
