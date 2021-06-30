import React from "react";
import styled from "styled-components";

import { Wrapper } from "../components/Wrapper";
import { PrimaryButton, OutlinedButton } from "./Button";

const BottomNav = ({ file }) => {
  return (
    <Container>
      <ButtonWrap>
        <Cancel>Cancel</Cancel>
        <Submit disabled={file ? false : true} file={file}>
          Submit
        </Submit>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  height: 6.25rem;
  display: grid;
  place-items: center;
  border-top: 1px solid #1c2141;
`;

const ButtonWrap = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

const Cancel = styled(OutlinedButton)``;

const Submit = styled(PrimaryButton)`
  margin-left: auto;
  background: var(--pishure-light-red);
  pointer-events: none;
  cursor: not-allowed;
  ${props =>
    props.file &&
    `
    pointer-events: initial;
    cursor: pointer;
    background: var(--pishure-red)
  `}
`;

export default BottomNav;
