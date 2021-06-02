import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButtonLink = styled(Link)`
	padding: 0.6rem 2rem;
	margin-left: 2rem;
	color: var(--white);
	background: var(--black-700);
	text-decoration: none;
	border: 1px solid #3d416c;
	border-radius: var(--radius);
`;

export const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: underline var(--white);
`
