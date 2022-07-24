import React from "react";
import PropTypes from "prop-types";
import useMounted from "./useMounted";

const useOutsideAlerter = (nodeRef, callback) => {
	useMounted(() => {
		const handleClickOutSide = (event) => {
			if (nodeRef && !nodeRef.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener("mousedown", handleClickOutSide);

		return () => {
			document.removeEventListener("mousedown", handleClickOutSide);
		};
	}, [nodeRef]);
};

useOutsideAlerter.propTypes = {
	nodeRef: PropTypes.object.isRequired,
	callback: PropTypes.func.isRequired,
};

export default useOutsideAlerter;
