import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "../assets/logo.svg";
import styled from "styled-components";

const Logo = () => {
	return (
		<Link to='/'>
			<LogoImage src={logoSrc} />
		</Link>
	);
};

const LogoImage = styled.img`
	@media;
`;

export default Logo;
