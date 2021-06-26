import React from "react";
import styled from "styled-components";

import { Wrapper } from "../../components/Wrapper";
import Header from "../../components/Header";
import ImagePreview from "../../components/ImagePreview";
import FormGroup from "../../components/FormGroup";
import { WideButton } from "../../components/Button";
import { StyledButtonLink } from "../../components/Links";
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

const SetPassword = () => {
  const { register, handleSubmit } = useFormValidation();
  const submitHandler = d => {
    alert(JSON.stringify(d));
  };

  return (
    <Wrapper>
      <Header>
        <WrapperInner>
          New to Pishure?
          <StyledButtonLink to='/signup'>Sign up</StyledButtonLink>
        </WrapperInner>
      </Header>
      <Container>
        <ImagePreviewWrap>
          <ImagePreview />
        </ImagePreviewWrap>

        <FormWrapper>
          <Headline>Set password.</Headline>
          <SetPasswordText>
            Create a new password. Make sure it is something you can easily
            remember.
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
            <WideButton type='submit'>Set password</WideButton>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

const SetPasswordText = styled(BodyText)`
  margin-bottom: 5rem;
`;

export default SetPassword;
