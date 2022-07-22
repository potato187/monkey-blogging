import { AdminFeatures, UserFeatures } from "./features";
import { NotFoundPage } from "./Layouts";

const publicRoutes = [
	{
		path: "*",
		Component: NotFoundPage,
		hasFullPage: false,
	},
	,
	{
		path: "/user/*",
		Component: UserFeatures,
		hasFullPage: false,
	},
	{
		path: "/admin/*",
		Component: AdminFeatures,
		hasFullPage: false,
	},
];
export { publicRoutes };
