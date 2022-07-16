import { withUserExists } from "../../hocs";
import { SignUpPage, SignInPage } from "./pages";
import { PATH } from "@/constant";

const publicRoutes = [
	{
		path: PATH.SIGN_UP,
		Element: withUserExists(SignUpPage),
	},
	{
		path: PATH.SIGN_IN,
		Element: withUserExists(SignInPage),
	},
];

export { publicRoutes };
