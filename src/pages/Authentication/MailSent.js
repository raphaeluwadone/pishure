import React from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../components/Wrapper';
import Header from '../../components/Header';
import ImagePreview from '../../components/ImagePreview';
import {StyledButtonLink} from '../../components/Links';

import {WrapperInner, Container, ImagePreviewWrap} from './AuthStyles';

import mailIcon from '../../assets/icon-mail.svg'

const MailSent = () => {
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

        <Content>
          <MailIcon src={mailIcon}/>
          <Headline>We’ve sent you a mail.</Headline>
          <BodyText>
            Please check your email and click on the link to reset your password.
          </BodyText>
        </Content>
      </Container>
    </Wrapper>
  )
}



const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 23.4375rem;
  align-items: center;
  margin-top: 13.25rem;
  text-align: center;
`;

const MailIcon = styled.img`
  margin-bottom: 3.1875rem;
`

const Headline = styled.h1`
  font-size: var(--font-4);
  margin-bottom: 1rem;
`

const BodyText = styled.p`
  font-size: var(--font-6)
`

export default MailSent;
