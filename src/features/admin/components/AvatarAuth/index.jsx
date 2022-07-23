import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Flex } from "@/components";
import DashBoard from "./Dashboard";

const AvatarAuthStyled = styled.div``;

const index = ({ children, ...props }) => {
	return <AvatarAuthStyled {...props}>{children}</AvatarAuthStyled>;
};

index.Avatar = Avatar;
index.Dashboard = DashBoard;

index.propTypes = {};

export default index;
