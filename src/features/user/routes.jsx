import { withUserExists } from "../../hocs";
import { SignUpPage } from "./pages";

const publicRoutes = [
	{
		path: "/sign-up",
		Element: withUserExists(SignUpPage),
	},
];

export { publicRoutes };
