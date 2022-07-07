import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/auth-context";
import { publicRoutes } from "./routes";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{publicRoutes.map(({ path, Element }, index) => (
						<Route key={index} path={path} element={<Element />} />
					))}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
