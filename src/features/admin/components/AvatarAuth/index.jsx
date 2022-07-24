import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Flex } from "@/components";
import DashBoard from "./Dashboard";
import { useOutsideAlerter } from "@/hooks";
import { useToggle } from "@/contexts/toggleContext";
import AvatarFullName from "./AvatarFullName";
import NavigateItem from "./NavigateItem";
import NavigateList from "./NavigateList";

const AvatarAuthStyled = styled.div`
	position: relative;
`;

const index = ({ nodeRef, children, ...props }) => {
	const { onClose } = useToggle();

	useOutsideAlerter(nodeRef, onClose);

	return (
		<AvatarAuthStyled ref={nodeRef} {...props}>
			{children}
		</AvatarAuthStyled>
	);
};

index.Avatar = Avatar;
index.AvatarFullName = AvatarFullName;
index.Dashboard = DashBoard;
index.NavigateList = NavigateList;
index.NavigateItem = NavigateItem;

index.propTypes = {
	nodeRef: PropTypes.object.isRequired,
};

export default index;
