import { Dashboard } from "./pages";

export const privateRoutes = [
	{
		path: "/*",
		Component: Dashboard,
		hasFullPage: false,
	},
];

export const dashboardRoutes = [
	{
		to: "/profile",
		text: "Profile",
	},
	{
		to: "/blog",
		text: "Blogs",
	},
	{
		to: "/blog",
		text: "Setting",
	},
	{
		to: "/",
		text: "SignOut",
	},
];
