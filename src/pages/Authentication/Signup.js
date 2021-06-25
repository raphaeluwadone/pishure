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
        <WrapperInner>
          Already have an account
          <StyledButtonLink to='/login'>Login</StyledButtonLink>
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
            <Submit type='submit'>Sign Up</Submit>
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
