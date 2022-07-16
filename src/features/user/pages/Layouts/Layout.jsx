import { Container, Flex, Grid, GridColumn, Heading, Section } from "@/components";
import { PATH } from "@/constant";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Layout = ({ heading = "", children = null }) => {
	return (
		<Section top='5rem' bottom='5rem'>
			<Container>
				<Grid>
					<GridColumn columnStart={4} columnEnd={10}>
						<Flex flow='column nowrap'>
							<Flex alignItems='center' justifyContext='center'>
								<NavLink to={PATH.HOME}>
									<img width='121' src='/images/logo.png' alt='Monkey Blogging Logo' />
								</NavLink>
							</Flex>
							<Heading direction='center'>{heading}</Heading>
							{children}
						</Flex>
					</GridColumn>
				</Grid>
			</Container>
		</Section>
	);
};

Layout.propTypes = {
	heading: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default Layout;
