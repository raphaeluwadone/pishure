import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButtonLink, StyledLink } from "../Links";
import more from "../../assets/more.svg";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Avatar";
import { PrimaryButton } from "../Button";
import notify from "../../assets/notify.svg";

const NavSideContent = () => {
	const { user } = useAuth();
	// let user = {};
	const authInnerNavContent = (
		<InnerWrapper>
			<PrimaryButton
				style={{
					marginRight: "2rem",
				}}
				to='/upload'
				as={Link}
			>
				Submit a photo
			</PrimaryButton>
			<NotifyIcon src={notify} />
			<Avatar />
		</InnerWrapper>
	);
	const navSideContent = (
		<NavRight>
			<More src={more} />
			<p>Explore</p>
			{user ? (
				authInnerNavContent
			) : (
				<>
					<StyledButtonLink
						to='/upload'
						style={{ borderColor: "var(--white)" }}
					>
						Submit a photo
					</StyledButtonLink>
					<Bar />
					<StyledLink to='/login'>Login</StyledLink>
					<PrimaryButton to='/signup' as={Link}>
						Signup
					</PrimaryButton>
				</>
			)}
		</NavRight>
	);

	return navSideContent;
};

const NavRight = styled.div`
	display: flex;
	align-items: center;
	& > *:not(:last-child) {
		margin-right: 2rem;
	}
`;

const Bar = styled.div`
	height: 50px;
	opacity: 0.5;
	width: 1px;
	background: #fff;
`;

const NotifyIcon = styled.img``;

const More = styled.img``;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export default NavSideContent;
