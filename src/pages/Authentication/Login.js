import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';

import Header from '../../components/Header';
import ImagePreview from '../../components/ImagePreview'
import {Wrapper} from '../../components/Wrapper';
import FormGroup from '../../components/FormGroup';
import {TwitterButton, FbButton, WideButton} from '../../components/Button';
import {StyledButtonLink, StyledLink} from '../../components/Links';

import {WrapperInner, Container, ImagePreviewWrap, FormWrapper, Headline, BodyText, WrapperItem, TwitterIcon, FbIcon, Or, OrInner, Form, FormRow} from './AuthStyles';

import twitter from '../../assets/icon-twitter.svg';
import fb from '../../assets/icon-fb.svg'

const Signin = () => {

  return (
    <Wrapper>
      <Header>
        <WrapperInner>
          New to Pishure?
          <StyledButtonLink to="/signup">Sign up</StyledButtonLink>
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
              <FormGroup type="email" label="Email address"/>
            </FormRow>

            <FormRow>
              <FormGroup type="password" label="Password"/>
            </FormRow>
            <FormLink>Forgot password?</FormLink>
            <WideButton type="submit">Login</WideButton>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}

const FormLink = styled(StyledLink)`
  display: block;
  margin-bottom: 2.5rem;
  font-size: var(--font-6);
`

export default Signin