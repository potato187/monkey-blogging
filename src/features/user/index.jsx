import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const UserFeature = () => {
	return (
		<Routes>
			{publicRoutes.map(({ ...rest }, index) => (
				<Route key={index} {...rest} />
			))}
		</Routes>
	);
};

export default UserFeature;
