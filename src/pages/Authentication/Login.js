import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import Header from "../../components/Header/Header";
import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";
import { Wrapper, Container } from "../../components/Wrapper";
import FormGroup from "../../components/FormGroup";
import Logo from "../../components/Logo";
import {
	TwitterButton,
	FbButton,
	PrimaryButton,
} from "../../components/Button";
import { StyledButtonLink, StyledLink } from "../../components/Links";
import {
	WrapperInner,
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
} from "./AuthStyles";
import { useFormValidation } from "../../hooks/useFormValidation";
import twitter from "../../assets/icon-twitter.svg";
import fb from "../../assets/icon-fb.svg";
import { useAuth } from "../../context/AuthContext";

const Signin = () => {
	const { register, handleSubmit, errors } = useFormValidation();

	const [error, setError] = React.useState("");
	const { user } = useAuth();

	if (user) return <Redirect to='/' />;

	const Login = d => {
		alert(JSON.stringify(d));
	};

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
			<Container>
				<ImagePreviewWrap>
					<ImagePreview />
					<ImagePreviewDetails />
				</ImagePreviewWrap>

				<FormWrapper>
					<Headline>Login to Pishure.</Headline>
					<BodyText>
						Tell the true Nigerian stories through the lenses of
						creators all over Nigeria.
					</BodyText>
					<WrapperItem>
						<TwitterButton>
							<TwitterIcon src={twitter} />
							Sign up with Twitter
						</TwitterButton>
						<FbButton as='button'>
							<FbIcon src={fb} />
						</FbButton>
					</WrapperItem>
					<Or>
						<OrInner>OR</OrInner>
					</Or>
					<Form onSubmit={handleSubmit(Login)}>
						<FormRow>
							<FormGroup
								type='email'
								label='Email address'
								name='email'
								register={register}
								error={errors.email}
								required
							/>
						</FormRow>

						<FormRow>
							<FormGroup
								type='password'
								name='password'
								register={register}
								label='password'
								error={errors.password}
								required
							/>
						</FormRow>
						<FormLink to='/forgotpassword'>
							Forgot password?
						</FormLink>
						<PrimaryButton
							style={{ width: "100%", height: "3.5rem" }}
							type='submit'
						>
							Login
						</PrimaryButton>
					</Form>
				</FormWrapper>
			</Container>
		</Wrapper>
	);
};

const FormLink = styled(StyledLink)`
	display: block;
	margin-bottom: 2.5rem;
	font-size: var(--font-6);
	text-decoration: underline var(--white);
`;

export default Signin;
