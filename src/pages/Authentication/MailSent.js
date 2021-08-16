import React from "react";
import styled from "styled-components";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import Header from "../../components/Header/Header";
import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";
import Logo from "../../components/Logo/Logo";
import { StyledButtonLink } from "../../components/Link/Links";

import { WrapperInner } from "./AuthStyles";

import mailIcon from "../../assets/icon-mail.svg";

const MailSent = () => {
	return (
		<Wrapper>
			<Header>
				<Logo />
				<WrapperInner>
					New to Pishure?
					<StyledButtonLink
						style={{ marginLeft: "2rem" }}
						to='/signup'
					>
						Sign up
					</StyledButtonLink>
				</WrapperInner>
			</Header>
			<Flex>
				<ImagePreviewWrap>
					<ImagePreview />
					<ImagePreviewDetails />
				</ImagePreviewWrap>

				<Content>
					<MailIcon src={mailIcon} />
					<Headline>We’ve sent you a mail.</Headline>
					<BodyText>
						Please check your email and click on the link to reset
						your password.
					</BodyText>
				</Content>
			</Flex>
		</Wrapper>
	);
};

const Content = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 23.4375rem;
	align-items: center;
	margin-top: 13.25rem;
	text-align: center;
`;

const MailIcon = styled.img`
	margin-bottom: 3.1875rem;
`;

const Headline = styled.h1`
	font-size: var(--font-4);
	margin-bottom: 1rem;
`;

const BodyText = styled.p`
	font-size: var(--font-6);
`;

export default MailSent;
