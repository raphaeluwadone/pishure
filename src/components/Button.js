import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: ${props => props.width || "6.25rem"};
  height: ${props => props.height || "2.5rem"};
  background: var(--pishure-red);
  line-height: 1.5;
  font-size: ${props => props.fontSize || "var(--font-7)"};
  color: var(--white);
  border-radius: var(--radius);
`;

export const OutlinedButton = styled(PrimaryButton)`
  background: var(--black-700);
  border: 1px solid #3d416c;
`;

export const TwitterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 75.33%;
  height: 3rem;
  margin-right: 1.3rem;
  border-radius: var(--radius);
  background: var(--twitter-blue);
  font-size: 1rem;
  color: var(--white);
`;

export const FbButton = styled(OutlinedButton)`
  flex: 19.78%;
  height: 3rem;
  display: grid;
  place-items: center;
  margin: 0;
`;
