import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex } from "@/components";

const NavigateListStyled = styled(Flex)``;

const NavigateList = ({ children }) => {
	return <NavigateListStyled flex='column nowrap'>{children}</NavigateListStyled>;
};

NavigateList.propTypes = {};

export default NavigateList;
