import { Dashboard } from "./pages";

const privateRoutes = [
	{
		path: "/*",
		Component: Dashboard,
		hasFullPage: false,
	},
];

export { privateRoutes };
