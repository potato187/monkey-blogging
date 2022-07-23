import { useMounted } from "@/hooks";
import React from "react";
import PropTypes from "prop-types";

const index = ({ id = "portal", children }) => {
	const createPortal = (id) => {
		const node = document.createElement("div");
		node.id = id;
		return node;
	};

	const portalWrapper = createPortal(id);

	useMounted(() => {
		document.appendChild(portalWrapper);
	}, []);

	return createPortal(<>{children}</>, portalWrapper);
};

index.propTypes = {
	id: PropTypes.string,
};

export default index;
