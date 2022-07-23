import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { GLOBAL } from "@/constant";
import { Flex } from "@/components";

const AvatarStyled = styled(Flex)`
	${(props) => css`
		justify-content: center;
		align-items: center;

		img {
			border-radius: 50%;
		}
	`};
`;

const Avatar = ({ handleSetToggle = null, pathImage = "", props }) => {
	const handleOnClick = () => {
		if (!handleSetToggle) return false;
		handleSetToggle();
	};
	return (
		<AvatarStyled {...props} onClick={handleOnClick}>
			<img src={pathImage || GLOBAL.AVATAR_USER} alt='Avatar user' width={28} height={28} />
		</AvatarStyled>
	);
};

Avatar.propTypes = {
	pathImage: PropTypes.string,
	handleSetToggle: PropTypes.func,
};

export default Avatar;
