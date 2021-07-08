import React from "react";
import styled from "styled-components";

import { Wrapper } from "../../components/Wrapper";
import Header from "../../components/Header";
import ImagePreview, {
  ImagePreviewDetails,
} from "../../components/ImagePreview";
import FormGroup from "../../components/FormGroup";
import { PrimaryButton } from "../../components/Button";
import { StyledButtonLink } from "../../components/Links";
import Logo from "../../components/Logo";
import { useFormValidation } from "../hooks/useFormValidation";
import {
  WrapperInner,
  Container,
  ImagePreviewWrap,
  FormWrapper,
  Headline,
  BodyText,
  Form,
  FormRow,
} from "./AuthStyles";

const ForgotPassword = () => {
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
          <StyledButtonLink to='/signup'>Sign up</StyledButtonLink>
        </WrapperInner>
      </Header>
      <Container>
        <ImagePreviewWrap>
          <ImagePreview />
          <ImagePreviewDetails />
        </ImagePreviewWrap>

        <FormWrapper>
          <Headline>Forgot password.</Headline>
          <ForgotPasswordText>
            Enter your email associated with this account and we’ll send you a
            reset password link.
          </ForgotPasswordText>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <FormRow className='mg-b'>
              <FormGroup
                type='email'
                name='email'
                register={register}
                label='Email address'
              />
            </FormRow>
            <PrimaryButton
              style={{ width: "100%", height: "3.5rem" }}
              type='submit'
            >
              Submit
            </PrimaryButton>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

const ForgotPasswordText = styled(BodyText)`
  margin-bottom: 5rem;
`;

export default ForgotPassword;
