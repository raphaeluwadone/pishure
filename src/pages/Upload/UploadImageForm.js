import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import FormGroup from '../../components/FormGroup'

const UploadImageForm = ({imgFile}) => {
  const url = URL.createObjectURL(imgFile);

  useEffect(() => {

    return () => URL.revokeObjectURL(url);
  })

  return (
    <Container>
      <ImageWrapper>
        <Image src={url} />
        <Cancel></Cancel>
      </ImageWrapper>
      <Form>
        <Row>
          <Label>Tags (optional)</Label>
          <FormGroup label="Tags" />
        </Row>
        <Row>
          <Label>Description (optional)</Label>
            <LargeTextField placeholder="Write something interesting..."></LargeTextField>
        </Row>

      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 51.1875rem;
  margin: 8.125rem auto 18.375rem;
  gap: 2.6rem;
`

const ImageWrapper = styled.div`
  min-width: 20.5rem;
  width: 20.5rem;
  height: 25rem;
  background: blue;
  
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
`

const Row = styled.div`
  &:not(:last-child){
    margin-bottom: 3rem;
  }
`

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 24px;
`

const Cancel = styled.button``

const Form = styled.form`
  max-width: 28.125rem;
  width: 100%;
`

const LargeTextField = styled.textarea`
  width: 100%;
  height: 8.2rem;
  display: block;
  font-size: 1rem;
  color: #BEC0CE;
  background: #12141D;
  border: 1px solid #3D416C;
  border-radius: var(--radius);
  padding: 1rem;

  &::placeholder{
    color: #BEC0CE;
  }
`;

export default UploadImageForm;
