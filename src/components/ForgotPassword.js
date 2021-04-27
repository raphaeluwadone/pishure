import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ImagePreview from './ImagePreview'
import {Link} from 'react-router-dom'

import twitter from '../icon-twitter.svg';
import fb from '../icon-fb.svg'

const ForgotPassword = () => {
  return (
    <>
      <Header>
        New to Pishure?
        <Login to="/signup">Sign up</Login>
      </Header>
      <Wrapper>
        <ImagePreviewWrap>
          <ImagePreview />
        </ImagePreviewWrap>
        

        <FormWrapper>
          <Headline>Forgot password.</Headline>
          <BodyText>
            Enter your email associated with this account and we’ll send you a reset password link.
          </BodyText>
          <Form>
            <FormRow className="mg-b">
              <Input as='input' placeholder="Email address"/>
            </FormRow>
            <Submit type="submit">Submit</Submit>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  )
}

const Login = styled(Link)`
  padding: 0.6rem 2rem;
  margin-left: 2rem;
  color: var(--white);
  background: #12141D;
  text-decoration: none;
  border: 1px solid #3D416C;
  border-radius: var(--radius)
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 75.9375rem;
  justify-content: space-between;
  margin-top: 4rem;
  padding-bottom: 2rem;
`

const ImagePreviewWrap = styled.div``

const FormWrapper = styled.div`
  max-width: 28.125rem;
`;

const Headline = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.25rem;
  line-height: 1.3;
`

const BodyText = styled.p`
  margin-bottom: 5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #E9EAEF;
`

const TwitterIcon = styled.img`
  margin-right: 1.5rem;
`
 
const Form = styled.form``;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  &.mg-b{
    margin-bottom: 2.5rem;
  }
`

const Input = styled(Login)`
  width: 100%;
  margin-left: 0;
  padding: 1rem;
  font-size: 1rem;

  ${(props) => props.mgR && `
    margin-right: 1.5rem;
  `}

  &::placeholder{
    color: #BEC0CE;
  }
`

const Submit = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--red);
  color: var(--white);
  font-size: 1rem;
`



export default ForgotPassword