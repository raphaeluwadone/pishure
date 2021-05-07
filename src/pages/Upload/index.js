import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import {Wrapper} from '../../components/Wrapper';
import BottomNav from '../../components/BottomNav'
import  SelectImage from './SelectImage';
import  UploadImageForm from './UploadImageForm';

const Upload = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Submit Photos</Title>
          <StyledLink>Need help?</StyledLink>
        </Header>
      </Wrapper>
      
      <SelectImage />
      {/*<UploadImageForm />*/}

      <BottomNav />
    </>
  )
}

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.25rem;
  
`

const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: underline;
`

const A = styled.a`
  color: var(--white);
  text-decoration: underline;
`



export default Upload
