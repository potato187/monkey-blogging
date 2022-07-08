import UserFeature from "./features/user";

const publicRoutes = [
	{
		path: "/*",
		element: <UserFeature />,
	},
];

export { publicRoutes };
