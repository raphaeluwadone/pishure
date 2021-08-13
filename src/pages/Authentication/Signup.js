import React from "react";
import styled from "styled-components/macro";
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
import { StyledButtonLink, StyledTextLink } from "../../components/Links";
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
	FormText,
	MessageText,
} from "./AuthStyles";

import twitter from "../../assets/icon-twitter.svg";
import fb from "../../assets/icon-fb.svg";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useAuth } from "../../context/AuthContext";

import * as auth from "./auth-provider";

const Signup = () => {
	const { register, handleSubmit, errors } = useFormValidation();
	const [message, setMessage] = React.useState("");
	const { user } = useAuth();

	if (user) return <Redirect to='/' />;

	const signUp = async data => {
		setMessage("");

		const newData = {
			...data,
			firstName: data.firstName.toLowerCase(),
			lastName: data.lastName.toLowerCase(),
		};

		try {
			const resp = await auth.signup(newData);
			console.log(resp);
			// if (resp.type === "error") {
			// 	setMessage(resp.message);
			// } else if (resp.type === "success") {
			// 	<Redirect to='/login' />;
			// }
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Wrapper>
			<Header>
				<Logo />
				<WrapperInner>
					<HeaderText>Already have an account?</HeaderText>
					<StyledButtonLink
						style={{ marginLeft: "2rem" }}
						to='/login'
					>
						Login
					</StyledButtonLink>
				</WrapperInner>
			</Header>
			<Container>
				<ImagePreviewWrap>
					<ImagePreview />
					<ImagePreviewDetails />
				</ImagePreviewWrap>

				<FormWrapper>
					<Headline>Sign up to Pishure.</Headline>
					<BodyText>
						Millions of free beautiful Nigerian photos for every
						creative.
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
					{message ? <MessageText>{message}</MessageText> : null}
					<Form onSubmit={handleSubmit(signUp)}>
						<FormRow grid>
							<FormGroup
								register={register}
								label='First name'
								mgR='1.5rem'
								name='firstName'
								required
								error={errors.firstName}
							/>
							<FormGroup
								register={register}
								name='lastName'
								label='Last name'
								required
								error={errors.lastName}
							/>
						</FormRow>

						<FormRow>
							<FormGroup
								register={register}
								type='email'
								label='Email address'
								name='email'
								required
								error={errors.email}
							/>
						</FormRow>

						<FormRow className='mg-b'>
							<FormGroup
								register={register}
								type='password'
								label='Password'
								name='password'
								required
								error={errors.password}
								minlength={8}
							/>
						</FormRow>
						<Submit
							style={{ width: "100%", height: "3.5rem" }}
							type='submit'
						>
							Sign Up
						</Submit>
					</Form>
					<FormText>
						By signing up, you agree to our{" "}
						<StyledTextLink>Terms of Service</StyledTextLink> and{" "}
						<StyledTextLink>Privacy Policy</StyledTextLink>.
					</FormText>
				</FormWrapper>
			</Container>
		</Wrapper>
	);
};

const Submit = styled(PrimaryButton)`
	margin-bottom: 1.5rem;
`;

const HeaderText = styled.p`
	@media (max-width: 470px) {
		display: none;
	}
`;

export default Signup;
