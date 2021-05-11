import styled from "styled-components"
import {useState } from 'react';

const SelectImage = ({handleFile, handleDrop}) => {
  const dragoverHandler = (ev) => {
    ev.preventDefault();
    console.log('drag over active')
  }
  
  return (
    <SelectImageContainer>
        <DropTarget onDrop={handleDrop} onDragOver={dragoverHandler}>
          <UploadButton>
            <Label>
              <FileInput type="file" accept="image/png, image/jpeg" onChange={handleFile}/>
              Drag and drop images <Block>or <Highlight>browse</Highlight> to choose a file</Block>
              <Small>(Images should be at most 4MB in size each.)</Small>
            </Label>
          </UploadButton>
        </DropTarget>
        <Details>
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
        </Details>
      </SelectImageContainer>
  )
}

const SelectImageContainer = styled.div`
  max-width: 43.75rem;
  margin: 6.25rem auto 11.625rem;
`

const DropTarget = styled.div`
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
  
  color: var(--white);
  font-size: 1.5rem;
  line-height: 1.8;
`

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
`

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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

const Details = styled.div`
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

const A = styled.a`
  color: var(--white);
  text-decoration: underline;
`

const Dot = styled.span`
  display: inline-block;
  margin-right: 15px;
  margin-top: 3px;
  flex: none;
  color: var(--white);
  font-size: 1rem;
  line-height: 1.47;
`

export default SelectImage;