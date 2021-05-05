import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Header from '../components/Header';
import {Wrapper} from '../components/Wrapper';
import BottomNav from '../components/BottomNav'

const Upload = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Submit Photos</Title>
          <StyledLink>Need help?</StyledLink>
        </Header>
      </Wrapper>
      
      <UploadContainer>
        <DragTarget>
          <UploadButton>
            Drag and drop images <Block>or <Highlight>browse</Highlight> to choose a file</Block>
            <Small>(Images should be at most 4MB in size each.)</Small>
          </UploadButton>
        </DragTarget>
        <UploadDetails>
          <Col>
            <DetailsText>
              <Dot>*</Dot>
              <Span>Uploads should be high-quality images.</Span>
            </DetailsText>
            <DetailsText>
              <Dot>*</Dot>
              <Span>Uploads will be vetted before published on  Pishure.</Span>
            </DetailsText>
          </Col>
          <Col>
            <DetailsText>
              <Dot>*</Dot>
              <Span>Your uploads will be distributed for free under the <A>Pishure license.</A></Span>
            </DetailsText>
          </Col>
        </UploadDetails>
      </UploadContainer>

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

const UploadContainer = styled.div`
  max-width: 43.75rem;
  margin: 6.25rem auto 11.625rem;
`

const DragTarget = styled.div`
  height: 25rem;
  border: 1px dashed var(--border-color);
  display: grid;
  place-items: center;
  margin-bottom: 3rem;
  border-radius: var(--radius);
`

const UploadButton = styled.button`
  max-width: 17.8125rem;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  font-size: 1.5rem;
  line-height: 1.8;
`

const Block= styled.span`
  font-size: 1.125rem;
`

const Span = styled.span`
  display: inline-block;
`

const Highlight = styled.span`
  color: var(--pishure-red);
`

const Small = styled.span`
  font-size: 0.875rem;
  color: #BEC0CE;
`

const UploadDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const Col = styled.div`
  width: 300px;
`

const DetailsText = styled.p`
  font-size: 1rem;
  position: relative;
  display: flex;
  
    &:not(:last-child){
      margin-bottom: 1.125rem;
    }
`

const Dot = styled.span`
  display: inline-block;
  margin-right: 15px;
  flex: none;
  color: var(--white);
  font-size: 1rem;
  line-height: 1.47;
`

export default Upload
