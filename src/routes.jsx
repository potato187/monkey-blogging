import UserFeature from "./features/user";

const publicRoutes = [
	{
		path: "/*",
		Component: UserFeature,
		hasFullPage: true,
	},
];

export { publicRoutes };
