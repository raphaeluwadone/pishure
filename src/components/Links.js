import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButtonLink = styled(Link)`
  padding: 0.7rem 1.7rem;
  color: var(--white);
  background: var(--black-700);
  text-decoration: none;
  border: 1px solid #3d416c;
  border-radius: var(--radius);
`;

export const StyledLink = styled(Link)`
  color: var(--white);
`;

export const StyledTextLink = styled.a`
  color: var(--white);
  text-decoration: underline var(--white);
`;
