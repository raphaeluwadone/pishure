import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/logo.svg";
import styled from "styled-components";

const Logo = () => {
	return (
		<Link to='/'>
			<LogoImage src={logoSrc} alt='Pishure' />
		</Link>
	);
};

const LogoImage = styled.img`
	object-fit: cover;

	@media (max-width: 470px) {
	}
`;

export default Logo;
