import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 83rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1367px) {
    padding: 0 2rem;
  }

  @media (max-width: 400px) {
    padding: 0 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 73rem;
  justify-content: space-between;
  margin-top: 10.5rem;
  padding-bottom: 2rem;
`;
