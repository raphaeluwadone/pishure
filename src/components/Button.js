import styled from 'styled-components'

export const OutlinedButton = styled.button`
  width: 6.25rem;
  height: 2.5rem;
  line-height: 1.5;
  font-size: 0.875rem;
  color: var(--white);
  background: var(--black-700);
  border: 1px solid #3D416C;
  border-radius: var(--radius)
`

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
`

export const WideButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--pishure-red);
  color: var(--white);
  font-size: 1rem;
`

