import React from 'react';
import styled from 'styled-components/macro';
import { StyledLink } from './Links';

const ImagePreview = () => {
  return (
    <>
      <Grid>
        <Col>
          <ImgBlock mgB/>
          <ImgBlock />
        </Col>
        <Col padT>
          <ImgBlock mgB/>
          <ImgBlock />
        </Col>
      </Grid>
      <Caption>Photos by <StyledLink>Nnanna Egwu</StyledLink>, <StyledLink>Oluwamayowa Adeyemi</StyledLink>, <StyledLink>Arthur Okonkwo</StyledLink> and <StyledLink>Aderinsola Oluwafemi</StyledLink>.</Caption> 
    </>
  )
}

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const Col = styled.div`
  ${(props) => props.padT && `
      padding-top: 4.75rem;
  `}
`

const ImgBlock = styled.div`
  width: 15.625rem;
  height: 21.25rem;
  border-radius: var(--radius);
  background-color: #9B9B9B;

  ${(props) => props.mgB && `
    margin-bottom: 1.5rem;
  `}
`;

const Caption = styled.p`
  margin-top: 2rem;
  font-size: var(--font-8);
`;

export default ImagePreview;
