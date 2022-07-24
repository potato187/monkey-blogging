import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Flex } from "@/components";
import DashBoard from "./Dashboard";

const AvatarAuthStyled = styled.div`
	position: relative;
`;

const index = ({ nodeRef, children, ...props }) => {
	return (
		<AvatarAuthStyled ref={nodeRef} {...props}>
			{children}
		</AvatarAuthStyled>
	);
};

index.Avatar = Avatar;
index.Dashboard = DashBoard;

index.propTypes = {
	nodeRef: PropTypes.object.isRequired,
};

export default index;
