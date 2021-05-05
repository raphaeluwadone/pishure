import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import ImagePreview from '../../components/ImagePreview'
import {Link} from 'react-router-dom';
import {Wrapper} from '../../components/Wrapper';
import {Container} from './AuthStyles';


import twitter from '../../assets/icon-twitter.svg';
import fb from '../../assets/icon-fb.svg'

const Signin = () => {
  return (
    <Wrapper>
      <Header>
        <WrapperInner>
          New to Pishure?
          <Login to="/signup">Sign up</Login>
        </WrapperInner>
      </Header>
      <Container>
        <ImagePreviewWrap>
          <ImagePreview />
        </ImagePreviewWrap>
        

        <FormWrapper>
          <Headline>Login to Pishure.</Headline>
          <BodyText>
            Tell the true Nigerian stories through the lenses of creators all over Nigeria.
          </BodyText>
          <WrapperItem>
            <TwitterButton>
              <TwitterIcon src={twitter} />Sign up with Twitter
            </TwitterButton>
            <FbButton as='button'><FbIcon src={fb}/></FbButton>
          </WrapperItem>
          <Or>
            <OrInner>OR</OrInner>
          </Or>
          <Form>
            <FormRow>
              <Input as='input' placeholder="Email address"/>
            </FormRow>

            <FormRow>
              <Input as='input' placeholder="Password"/>
            </FormRow>
            <FormLink>Forgot password?</FormLink>
            <Submit type="submit">Login</Submit>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
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

const WrapperInner = styled.div``

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
  margin-bottom: 2.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #E9EAEF;
`

const WrapperItem = styled.div`
  display: flex;
  margin-bottom: 4.1875rem;
`;

const TwitterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  flex: calc(75% - 1.3rem);
  margin-right: 1.3rem;
  border-radius: var(--radius);
  background: var(--twitter-blue);
  font-size: 1rem;
  color: var(--white);
`

const TwitterIcon = styled.img`
  margin-right: 1.5rem;
`

const FbButton = styled(Login)`
  flex: 25%;
  display: grid;
  place-items: center;
  margin: 0;
`

const FbIcon = styled.img`
  margin-right: 0;
`

const Or = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 3.5rem;

    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #9395AD;
      left: 0;
      top: calc(50% - 0.5px);
    }
`;

const OrInner = styled.span`
  display: inline-block;
  position: relative;
  padding: 0 1rem;
  background-color: var(--black-900);
  z-index: 1;
  color: #9395AD;
`;

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

const FormLink = styled(Link)`
  display: block;
  margin-bottom: 2.5rem;
  color: var(--white);
  text-decoration-color: #9395AD;
`

const Submit = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--pishure-red);
  color: var(--white);
  font-size: 1rem;
`



export default Signin