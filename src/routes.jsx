import HomePage from "./components/HomePage";
import UserFeature from "./features/user";

const publicRoutes = [
	{
		path: "/*",
		element: <UserFeature />,
	},
	{
		path: "/home",
		element: <HomePage />,
	},
];

export { publicRoutes };
