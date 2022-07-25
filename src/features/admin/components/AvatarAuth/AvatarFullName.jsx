import { useAuth } from "@/contexts/auth-context";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GLOBAL } from "@/constant";
import { Flex } from "@/components";

const MediaStyled = styled.div`
	flex-shrink: 0;
	width: 50px;
	text-align: center;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	margin-bottom: 1rem;

	> img {
		width: 100%;
		height: auto;
		border-radius: 50%;
	}
`;
const ContactStyled = styled.div`
	flex-grow: 1;
	padding-left: 12px;
	align-self: center;
	> * {
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	> h3 {
		font-size: 1.6rem;
		line-height: 1.1em;
		color: #292929;
		margin-bottom: 4px;
	}
	> div {
		color: #757575;
		font-size: 1.4rem;
	}
`;
const AvatarStyled = styled(Flex)`
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid #0000000d;
`;

const AvatarFullName = ({ pathImage = GLOBAL.AVATAR_USER, props }) => {
	const { user } = useAuth();
	return (
		<AvatarStyled {...props}>
			<MediaStyled>
				<img src={pathImage} alt='Avatar user' width={28} height={28} />
			</MediaStyled>
			<ContactStyled>
				<h3>Lorem, ipsum dolor.</h3>
				<div>lorem@gmail.com</div>
			</ContactStyled>
		</AvatarStyled>
	);
};
AvatarFullName.propTypes = {
	pathImage: PropTypes.string,
};

export default AvatarFullName;
