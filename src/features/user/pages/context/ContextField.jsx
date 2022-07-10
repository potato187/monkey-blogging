import { createContext, useContext, useId, useState } from "react";
import PropTypes from "prop-types";

const FieldContext = createContext();

const FieldProvider = ({ name, control, hasIcon = false, children, ...restProps }) => {
	const id = useId();
	const [visible, setVisible] = useState(false);

	const handleVisible = () => {
		setVisible((prevState) => !prevState);
	};

	const values = { control, name, id, visible, hasIcon, handleVisible };
	return (
		<FieldContext.Provider value={values} {...restProps}>
			{children}
		</FieldContext.Provider>
	);
};

const useField = () => {
	const context = useContext(FieldContext);
	if (typeof context === "undefined") {
		throw new Error("The use Context should be used within a Provider");
	}
	return context;
};

FieldProvider.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
};

export { useField };
export default FieldProvider;
