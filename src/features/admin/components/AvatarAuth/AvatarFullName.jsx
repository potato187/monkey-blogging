import { useAuth } from "@/contexts/auth-context";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GLOBAL } from "@/constant";

const MediaStyled = styled.div``;
const ContactStyled = styled.div``;
const AvatarStyled = styled.div``;

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
