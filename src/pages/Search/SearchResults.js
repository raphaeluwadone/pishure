import React from "react";
import styled from "styled-components";
import { OutlinedButton } from "../../components/Button";
import { InputField } from "../../components/FormGroup";
import { Wrapper } from "../../components/Wrapper";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { NavSideContent } from "../Home";
import camera from "../../assets/icon-camera.svg";

const SearchResults = () => {
  return (
    <Wrapper>
      <Header>
        <Div>
          <Logo />
          <NavSearchBar />
        </Div>
        <NavSideContent />
      </Header>
      <Container>
        <SidebarContent>
          <Headline2 style={{ marginBottom: "40px" }}>Filter by</Headline2>
          <FilterWrapper>
            <FilterText>Sort By</FilterText>
            <Label>
              <Input type='checkbox' />
              Most relevant
            </Label>
            <Label>
              <Input type='checkbox' />
              Newest
            </Label>
          </FilterWrapper>
          <FilterWrapper>
            <FilterText>Orientation</FilterText>
            <Label>
              <Input type='checkbox' />
              All Orientation
            </Label>
            <Label>
              <Input type='checkbox' />
              Landscape
            </Label>
            <Label>
              <Input type='checkbox' />
              Portrait
            </Label>
          </FilterWrapper>
        </SidebarContent>
        <MainContent></MainContent>
      </Container>
    </Wrapper>
  );
};

const NavSearchBar = () => {
  return (
    <SearchForm>
      <InputField
        style={{
          border: "1px solid #3d416c",
          borderRadius: "var(--radius) 0  0 var(--radius)",
          paddingLeft: "1.5rem",
          height: "2.5rem",
          fontSize: "var(--font-7)",
        }}
        placeholder='Search high quality photos for free!...'
      />
      <SearchImageButton>
        <Image src={camera} />
      </SearchImageButton>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  width: 540px;
  margin-left: 1.5rem;

  @media (max-width: 1500px) {
    width: 470px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 1rem;
  height: 1rem;
`;

const SearchImageButton = styled(OutlinedButton)`
  padding: 0 0.75rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Container = styled.div`
  display: flex;
  margin-top: 6.25rem;
`;

const SidebarContent = styled.div``;

const FilterWrapper = styled.div``;

const FilterText = styled.div``;

const Input = styled.input``;

const Label = styled.label``;

const MainContent = styled.div`
  border-top: 1px solid #1c2141;
  border-left: 1px solid #1c2141;
  flex-grow: 1;
`;

const Headline2 = styled.h3`
  font-size: var(--font-5);
  margin-top: 3rem;
`;

export default SearchResults;
