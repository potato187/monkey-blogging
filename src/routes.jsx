import UserFeature from "./features/user";
import { NotFoundPage } from "./Layouts";

const publicRoutes = [
	{
		path: "*",
		Component: NotFoundPage,
		hasFullPage: false,
	},
	,
	{
		path: "/*",
		Component: UserFeature,
		hasFullPage: false,
	},
];
export { publicRoutes };
