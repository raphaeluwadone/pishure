import styled from 'styled-components'

export const OutlinedButton = styled.button`
  width: 100px;
  height: 40px;
  color: var(--white);
  background: var(--black-700);
  border: 1px solid #3D416C;
  border-radius: var(--radius)
`

export const TwitterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  flex: 75.33%;
  margin-right: 1.3rem;
  border-radius: var(--radius);
  background: var(--twitter-blue);
  font-size: 1rem;
  color: var(--white);
`;

export const FbButton = styled(OutlinedButton)`
  flex: 19.78%;
  display: grid;
  place-items: center;
  margin: 0;
`

