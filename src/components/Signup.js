import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ImagePreview from './ImagePreview'
import {Link} from 'react-router-dom'
import { buildQueries } from '@testing-library/dom';

const Signup = () => {
  return (
    <>
      <Header>
        Already have an account
        <Login to="/login">Login</Login>
      </Header>
      <Wrapper>
        <ImagePreviewWrap>
          <ImagePreview />
        </ImagePreviewWrap>
        

        <FormWrapper>
          <Headline>Sign up to Pishure.</Headline>
          <BodyText>
            Millions of free beautiful Nigerian photos for every creative.
          </BodyText>
          <WrapperItem>
            <TwitterButton>Sign up with Twitter</TwitterButton>
            <FbButton></FbButton>
          </WrapperItem>
          <Or>
            <OrInner>OR</OrInner>
          </Or>
          <Form>
            <FormRow grid>
              <Input />
              <Input />
            </FormRow>

            <FormRow>
              <Input />
            </FormRow>

            <FormRow>
              <Input />
            </FormRow>
            <Submit>Sign Up</Submit>
          </Form>
          <FormText>By signing up, you agree to our <A>Terms of Service</A> and <A>Privacy Policy</A>.</FormText>
        </FormWrapper>
      </Wrapper>
    </>
  )
}

const Login = styled(Link)`
  padding: 0.7rem 1.5rem;
  margin-left: 2rem;
  color: var(--white);
  background: #12141D;
  text-decoration: none;
  
  border: 1px solid #3D416C;
  border-radius: var(--radius)
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  margin-top: 4rem;
  padding-bottom: 2rem;
`

const ImagePreviewWrap = styled.div``

const FormWrapper = styled.div``;

const Headline = styled.h1``

const BodyText = styled.p``

const WrapperItem = styled.div``;

const TwitterButton = styled.button``

const FbButton = styled.button``

const Or = styled.div``;

const OrInner = styled.span``;

const Form = styled.form``;

const FormRow = styled.div``

const Input = styled.input``

const Submit = styled.button``

const FormText = styled.p``;

export default Signup
