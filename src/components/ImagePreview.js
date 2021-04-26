import React from 'react';
import styled from 'styled-components/macro';

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
      <Caption>Photos by <A>Nnanna Egwu</A>, <A>Oluwamayowa Adeyemi</A>, <A>Arthur Okonkwo</A> and <A>Aderinsola Oluwafemi</A>.</Caption> 
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
  font-size: 0.75rem;
`;

const A = styled.a`
  text-decoration: underline var(--white);
  cursor: pointer;
`;

export default ImagePreview;