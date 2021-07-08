import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import ImagePreview, {
  ImagePreviewDetails,
} from "../../components/ImagePreview";
import { Wrapper } from "../../components/Wrapper";
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
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const submitHandler = d => {
    alert(JSON.stringify(d));
  };

  return (
    <Wrapper>
      <Header>
        <Logo />
        <WrapperInner>
          Already have an account
          <StyledButtonLink style={{ marginLeft: "2rem" }} to='/login'>
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
            Millions of free beautiful Nigerian photos for every creative.
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
          <Form onSubmit={handleSubmit(submitHandler)}>
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
            <Submit style={{ width: "100%", height: "3.5rem" }} type='submit'>
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

export default Signup;
