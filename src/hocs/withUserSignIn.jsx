import { useAuth } from "@/contexts/auth-context";
import { useMounted } from "@/hooks";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant";

const withUserExists = (Component) => (props) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useMounted(() => {
		if (user && Object.keys(user).length > 0) {
			navigate(PATH.HOME);
		}
	}, [user]);

	return <Component {...props} />;
};

withUserExists.propTypes = {
	Component: PropTypes.func.isRequired,
};

export default withUserExists;
