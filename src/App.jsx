import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/auth-context";
import { publicRoutes } from "./routes";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{publicRoutes.map(({ ...rest }, index) => (
						<Route key={index} {...rest} />
					))}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
