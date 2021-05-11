import React from 'react';
import styled from 'styled-components';

import {Wrapper} from '../components/Wrapper'

const BottomNav = ({file}) => {
  return (
    <Container>
      <ButtonWrap>
        <Cancel>Cancel</Cancel>
        <Submit disabled={file ? false : true} file={file}>Submit</Submit>
      </ButtonWrap>
    </Container>
  )
}

const Container = styled.div`
  height: 6.25rem;
  display: grid;
  place-items: center;
  border-top: 1px solid #1C2141;
`

const ButtonWrap = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`

const Cancel = styled.button`
  width: 6.25rem;
  height: 2.5rem;
  display: inline-block;
  line-height: 1.5;
  color: var(--white);
  font-size: 0.875rem;
  border-radius: var(--radius);
  background: var(--black-700);
  border: 1px solid #3D416C;
`

const Submit = styled(Cancel)`
  margin-left: auto;
  background: var(--pishure-light-red);
  border: none;
  pointer-events: none;
  cursor: not-allowed;
  ${(props) => props.file && `
    pointer-events: initial;
    cursor: pointer;
    background: var(--pishure-red)
  `}
`

export default BottomNav
