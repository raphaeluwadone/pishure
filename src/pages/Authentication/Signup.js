import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import ImagePreview from "../../components/ImagePreview";
import { Wrapper } from "../../components/Wrapper";
import FormGroup from "../../components/FormGroup";
import { TwitterButton, FbButton, WideButton } from "../../components/Button";
import { StyledButtonLink, StyledLink } from "../../components/Links";
import {
	WrapperInner,
	Container,
	ImagePreviewWrap,
	FormWrapper,
	Headline,
	BodyText,
	WrapperItem,
	TwitterIcon,
	FbIcon,
	Or,
	OrInner,
	Form,
	FormRow,
	FormText,
} from "./AuthStyles";

import twitter from "../../assets/icon-twitter.svg";
import fb from "../../assets/icon-fb.svg";

const Signup = () => {
	return (
		<Wrapper>
			<Header>
				<WrapperInner>
					Already have an account
					<StyledButtonLink to="/login">Login</StyledButtonLink>
				</WrapperInner>
			</Header>
			<Container>
				<ImagePreviewWrap>
					<ImagePreview />
				</ImagePreviewWrap>

				<FormWrapper>
					<Headline>Sign up to Pishure.</Headline>
					<BodyText>
						Millions of free beautiful Nigerian photos for every creative.
					</BodyText>
					<WrapperItem>
						<TwitterButton>
							<TwitterIcon src={twitter} />
							Sign up with Twitter
						</TwitterButton>
						<FbButton as="button">
							<FbIcon src={fb} />
						</FbButton>
					</WrapperItem>
					<Or>
						<OrInner>OR</OrInner>
					</Or>
					<Form>
						<FormRow grid>
							<FormGroup label="First name" mgR="1.5rem" />
							<FormGroup label="Last name" />
						</FormRow>

						<FormRow>
							<FormGroup type="email" label="Email address" />
						</FormRow>

						<FormRow className="mg-b">
							<FormGroup type="password" label="Password" />
						</FormRow>
						<Submit type="submit">Sign Up</Submit>
					</Form>
					<FormText>
						By signing up, you agree to our{" "}
						<StyledLink>Terms of Service</StyledLink> and{" "}
						<StyledLink>Privacy Policy</StyledLink>.
					</FormText>
				</FormWrapper>
			</Container>
		</Wrapper>
	);
};

const Submit = styled(WideButton)`
	margin-bottom: 1.5rem;
`;

export default Signup;
