import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const toggleContext = createContext();

const ToggleProvider = ({ initial = false, children, props }) => {
	const [toggle, setToggle] = useState(initial);

	const handleSetToggle = () => {
		setToggle((prevState) => !prevState);
	};

	return (
		<toggleContext.Provider value={{ toggle, handleSetToggle }} {...props}>
			{children}
		</toggleContext.Provider>
	);
};

const useToggle = () => {
	const context = useContext(toggleContext);
	if (context === void 0) {
		throw new Error("useToggle must be used within a ToggleContext ");
	}

	return context;
};

toggleContext.propTypes = {
	initial: PropTypes.bool,
};

export { useToggle };
export default ToggleProvider;
