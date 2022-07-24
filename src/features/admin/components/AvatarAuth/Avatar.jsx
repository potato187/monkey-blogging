import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { GLOBAL } from "@/constant";
import { Flex } from "@/components";
import { useToggle } from "@/contexts/toggleContext";

const AvatarStyled = styled(Flex)`
	${(props) => css`
		justify-content: center;
		align-items: center;

		img {
			border-radius: 50%;
		}
	`};
`;

const Avatar = ({ pathImage = "", props }) => {
	const { toggle, handleSetToggle } = useToggle();
	return (
		<AvatarStyled {...props} onClick={handleSetToggle}>
			<img src={pathImage || GLOBAL.AVATAR_USER} alt='Avatar user' width={28} height={28} />
		</AvatarStyled>
	);
};

Avatar.propTypes = {
	pathImage: PropTypes.string,
};

export default Avatar;
