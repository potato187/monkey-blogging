import React, { createElement } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import { ButtonStyle } from "./styled";

const index = ({ element = "button", isLoading = false, children, ...rest }) => {
	return (
		<ButtonStyle element={element} {...rest}>
			{isLoading ? <Spinner /> : children}
		</ButtonStyle>
	);
};

index.propTypes = {
	element: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	isLoading: PropTypes.bool,
};

export default index;
