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
        <Login>Login</Login>
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
          <FormText>By signing up, you agree to our <A>Terms of Service</A> and Privacy Policy.</FormText>
        </FormWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
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
