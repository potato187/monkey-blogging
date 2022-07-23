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

const Avatar = ({ setToggle = null, pathImage = "", props }) => {
	return (
		<AvatarStyled {...props}>
			<img src={pathImage || GLOBAL.AVATAR_USER} alt='Avatar user' width={28} height={28} />
		</AvatarStyled>
	);
};

Avatar.propTypes = {
	pathImage: PropTypes.string,
	setToggle: PropTypes.func,
};

export default Avatar;
