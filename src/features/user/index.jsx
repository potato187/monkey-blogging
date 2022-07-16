import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const UserFeature = () => {
	return (
		<Routes>
			{publicRoutes.map(({ Element, ...props }, index) => (
				<Route key={index} element={<Element />} {...props} />
			))}
		</Routes>
	);
};

export default UserFeature;
