import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import Logo from "../components/Logo";
import { StyledButtonLink, StyledLink } from "../components/Links";
import { PrimaryButton } from "../components/Button";

import more from "../assets/more.svg";

const Home = () => {
  const navSideContent = (
    <NavRight>
      <More src={more} />
      <p>Explore</p>
      <StyledButtonLink style={{ borderColor: "var(--white)" }}>
        Submit a photo
      </StyledButtonLink>
      <Bar />
      <StyledLink>Login</StyledLink>
      <PrimaryButton as={Link} to='/signup'>
        Signup
      </PrimaryButton>
    </NavRight>
  );

  return (
    <Wrapper>
      <Header>
        <Logo />
        {navSideContent}
      </Header>
    </Wrapper>
  );
};

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled.div``;
const More = styled.img``;

export default Home;
