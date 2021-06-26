import React, { useEffect } from "react";
import styled from "styled-components";
import FormGroup from "../../components/FormGroup";
import Cancel from "../../assets/cancel.svg";
import { useFormValidation } from "../hooks/useFormValidation";

const UploadImageForm = ({ imgFile, setFile }) => {
  const url = URL.createObjectURL(imgFile);
  const { register } = useFormValidation();

  useEffect(() => {
    return () => URL.revokeObjectURL(url);
  });

  return (
    <Container>
      <ImageWrapper>
        <Image src={url} />
        <CancelButton onClick={() => setFile(null)}>
          <CancelIcon src={Cancel} />
        </CancelButton>
      </ImageWrapper>
      <Form>
        <Row>
          <Label>Tags (optional)</Label>
          <FormGroup label='Tags' register={register} name='tags' />
        </Row>
        <Row>
          <Label>Description (optional)</Label>
          <LargeTextField
            {...register("description")}
            placeholder='Write something interesting...'></LargeTextField>
        </Row>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 51.1875rem;
  margin: 8.125rem auto 18.375rem;
  gap: 2.6rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 20.5rem;
  height: 25rem;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const Row = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 24px;
`;

const CancelButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -15px;
  top: -15px;
  border-radius: 50%;
  background: var(--white);
`;

const CancelIcon = styled.img`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  max-width: 28.125rem;
  width: 100%;
`;

const LargeTextField = styled.textarea`
  width: 100%;
  height: 8.2rem;
  display: block;
  font-size: 1rem;
  color: #bec0ce;
  background: #12141d;
  border: 1px solid #3d416c;
  border-radius: var(--radius);
  padding: 1rem;

  &::placeholder {
    color: #bec0ce;
  }
`;

export default UploadImageForm;
