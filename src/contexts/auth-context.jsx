import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children, ...rest }) => {
	const [auth, setAuth] = useState({});

	return (
		<AuthContext.Provider value={{ auth, setAuth }} {...rest}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);

	if (typeof context === "undefined") {
		throw new Error("a useAuth must be used within a AuthProvider");
	}

	return context;
};

export default AuthProvider;
export { useAuth };
