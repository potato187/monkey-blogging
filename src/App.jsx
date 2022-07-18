import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/auth-context";
import { PageFull } from "./Layouts";
import { publicRoutes } from "./routes";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{publicRoutes.map(({ hasFullPage, Component, ...rest }, index) => (
						<Route
							key={index}
							{...rest}
							element={
								hasFullPage ? (
									<PageFull>
										<Component />
									</PageFull>
								) : (
									<Component />
								)
							}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
