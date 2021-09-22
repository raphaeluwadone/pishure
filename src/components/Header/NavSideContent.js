import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../Link/Links";
import more from "../../assets/more.svg";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Avatar";
import Button from "../Button";
import notify from "../../assets/notify.svg";
import { useHistory } from "react-router-dom";

const NavSideContent = () => {

	const { user } = useAuth();
	// let user = {};
	const history = useHistory()

	const profileRoute = () => {
		history.push('/profile')
		console.log('Profile router');
	}


	const authInnerNavContent = (
		<InnerWrapper>
			<Button theme='primary' to='/upload' as={Link}>
				Submit a photo
			</Button>
			<NotifyIcon src={notify} />
				<Avatar />
		</InnerWrapper>
	);

	const navSideContent = (
		<NavRight>
			<More src={more} />
			<Text>Explore</Text>
			{user ? (
				authInnerNavContent
			) : (
				<UnAuthenticatedInner>
					<Button
						as={Link}
						theme='outlined'
						to='/upload'
						border='var(--white)'
					>
						Submit a photo
					</Button>
					<Bar />
					<StyledLink to='/login'>Login</StyledLink>
					<Button theme='primary' to='/signup' as={Link}>
						Signup
					</Button>
				</UnAuthenticatedInner>
			)}
		</NavRight>
	);

	return navSideContent;
};

const Text = styled.p`
	@media (max-width: 723px) {
		display: none;
	}
`;

const Bar = styled.div`
	height: 50px;
	opacity: 0.5;
	width: 1px;
	background: #fff;
`;

const NotifyIcon = styled.img``;

const More = styled.img`
	@media (max-width: 723px) {
		display: none;
	}
`;

const NavRight = styled.div`
	display: flex;
	align-items: center;

	& > *:not(:last-child) {
		margin-right: 2rem;
	}
`;

const UnAuthenticatedInner = styled(NavRight)`
	@media (max-width: 723px) {
		display: none;
	}
`;

const InnerWrapper = styled(NavRight)`
	display: flex;
	align-items: center;
`;

export { NavSideContent };
