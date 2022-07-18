import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "./components";

const PageFull = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

PageFull.propTypes = {};

export default PageFull;
