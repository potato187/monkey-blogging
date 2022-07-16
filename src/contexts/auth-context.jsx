import { createContext, useContext, useState } from "react";
import { useMounted } from "@/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

const AuthContext = createContext();

const AuthProvider = ({ children, ...props }) => {
	const [user, setUser] = useState({});
	useMounted(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }} {...props}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);

	if (typeof context === "undefined") {
		throw new Error("A useAuth must be used within a AuthProvider");
	}

	return context;
};

export default AuthProvider;
export { useAuth };
