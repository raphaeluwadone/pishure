import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { Wrapper, Container } from "../components/Wrapper";
import Logo from "../components/Logo";
import { StyledButtonLink, StyledLink } from "../components/Links";
import { PrimaryButton } from "../components/Button";
import ImagePreview, { ImagePreviewDetails } from "../components/ImagePreview";
import { SearchInput } from "../components/SearchInput";

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
      <Container style={{ marginTop: "9.75rem", paddingBottom: "0" }}>
        <Col>
          <Heading>Best Collection of Nigerian Stock Photos.</Heading>
          <Body>
            Tell the true Nigerian stories through the lenses of creators all
            over Nigeria.
          </Body>
          <SearchInput />
          <SearchExample>
            <Span>Try:</Span>danfo, street, traffic, lagos life,
          </SearchExample>
          <ImagePreviewDetails />
        </Col>
        <ImagePreview />
      </Container>
    </Wrapper>
  );
};

const NavRight = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Bar = styled.div`
  height: 50px;
  opacity: 0.5;
  width: 1px;
  background: #fff;
`;

const More = styled.img``;

const Col = styled.div`
  max-width: 33.75rem;
`;

const Heading = styled.h1`
  font-size: var(--font-1);
  margin-bottom: 1rem;
  margin-top: 12.5rem;
  line-height: 1.3;
`;

const Body = styled.p`
  margin-bottom: 3rem;
  font-size: var(--font-5);
  line-height: 1.5;
  color: var(--grey-10);
`;

const Span = styled.span`
  display: inline-block;
  margin-right: 1rem;
`;

const SearchExample = styled.p`
  font-size: 1rem;
  color: var(--grey-10);
  margin-bottom: 17.75rem;
`;

export default Home;
