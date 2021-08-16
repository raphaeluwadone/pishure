import React from "react";
import styled from "styled-components";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import Header from "../../components/Header/Header";
import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";
import FormGroup from "../../components/FormGroup/FormGroup";
import { PrimaryButton } from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { StyledButtonLink } from "../../components/Link/Links";
import { useFormValidation } from "../../hooks/useFormValidation";
import {
	WrapperInner,
	FormWrapper,
	Headline,
	BodyText,
	Form,
	FormRow,
} from "./AuthStyles";

const SetPassword = () => {
	const { register, handleSubmit } = useFormValidation();
	const submitHandler = d => {
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
			<Flex>
				<ImagePreviewWrap>
					<ImagePreview />
					<ImagePreviewDetails />
				</ImagePreviewWrap>

				<FormWrapper>
					<Headline>Set password.</Headline>
					<SetPasswordText>
						Create a new password. Make sure it is something you can
						easily remember.
					</SetPasswordText>

					<Form onSubmit={handleSubmit(submitHandler)}>
						<FormRow>
							<FormGroup
								name='password'
								register={register}
								type='password'
								label='Password'
							/>
						</FormRow>
						<PrimaryButton
							style={{ width: "100%", height: "3.5rem" }}
							type='submit'
						>
							Set password
						</PrimaryButton>
					</Form>
				</FormWrapper>
			</Flex>
		</Wrapper>
	);
};

const SetPasswordText = styled(BodyText)`
	margin-bottom: 5rem;
`;

export default SetPassword;
