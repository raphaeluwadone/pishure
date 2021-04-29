import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ImagePreview from '../components/ImagePreview'
import {Link} from 'react-router-dom'


const SetPassword = () => {
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
          <Headline>Set password.</Headline>
          <BodyText>
            Create a new password. Make sure it is something you can easily remember.
          </BodyText>
          
          <Form>
            <FormRow>
              <Input as='input' placeholder="Password"/>
            </FormRow>
            <Submit type="submit">Set password</Submit>
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

export default SetPassword;