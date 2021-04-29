import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ImagePreview from '../components/ImagePreview';
import {Link} from 'react-router-dom';

import mailIcon from '../assets/icon-mail.svg'

const MailSent = () => {
  return (
    <div>
      <Header>
        New to Pishure?
        <Login to="/signup">Sign up</Login>
      </Header>
      <Wrapper>
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
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  max-width: 75.75rem;
  justify-content: space-between;
  margin-top: 4rem;
  padding-bottom: 2rem;
`

const Login = styled(Link)`
  padding: 0.6rem 2rem;
  margin-left: 2rem;
  color: var(--white);
  background: #12141D;
  text-decoration: none;
  border: 1px solid #3D416C;
  border-radius: var(--radius)
`;

const ImagePreviewWrap = styled.div``

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
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.3;
`

const BodyText = styled.p`
  margin-bottom: 2.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #E9EAEF;
`

export default MailSent;
