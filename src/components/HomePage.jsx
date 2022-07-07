import React from "react";
import { useAuth } from "@/contexts/auth-context";

const HomePage = () => {
	const { auth, setAuth } = useAuth();

	console.log(auth);

	return <div>home page</div>;
};

export default HomePage;
