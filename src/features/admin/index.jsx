import React from "react";
import PropTypes from "prop-types";
import { privateRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";

const index = () => {
	return (
		<Routes>
			{privateRoutes.map(({ Component, ...rest }, index) => (
				<Route key={index} element={<Component />} {...rest} />
			))}
		</Routes>
	);
};

index.propTypes = {};

export default index;
