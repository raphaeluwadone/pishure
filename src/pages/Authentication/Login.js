import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import Header, { HeaderText, HeaderInner } from "../../components/Header";

import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";
import Icon from "../../components/Icon/Icon";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import FormGroup from "../../components/FormGroup/FormGroup";
import Logo from "../../components/Logo/Logo";

import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";
import Spacer from "../../components/Spacer/Spacer";

import { StyledLink } from "../../components/Link/Links";

import {
	FormWrapper,
	Headline,
	BodyText,
	WrapperItem,
	Or,
	OrInner,
	Form,
	FormRow,
} from "./AuthStyles";
import { useFormValidation } from "../../hooks/useFormValidation";
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
				<HeaderInner>
					<HeaderText>New to Pishure?</HeaderText>
					<Button
						theme='outlined'
						as={Link}
						style={{ marginLeft: "2rem" }}
						to='/signup'
					>
						Sign up
					</Button>
				</HeaderInner>
			</Header>
			<Flex>
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
						<Button theme='twitter' fontSize='1rem'>
							<Icon type='twitter' />
							<Spacer size='1.5rem' />
							Sign up with Twitter
						</Button>
						<Button theme='fb'>
							<Icon type='fb' />
						</Button>
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
						<Button
							theme='primary'
							width='100%'
							fontSize='1rem'
							height='3.5rem'
							type='submit'
						>
							Login
						</Button>
					</Form>
				</FormWrapper>
			</Flex>
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
