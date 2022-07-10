import React, { useState } from "react";
import PropTypes from "prop-types";

const useInput = ({ initialValue, ...rest }) => {
	const [value, setValue] = useState(initialState);
	const handleInputChange = (event) => {
		setValue(event.target.value);
	};

	return [value, handleInputChange];
};

useInput.propTypes = {
	initialValue: PropTypes.any,
};

export default useInput;
