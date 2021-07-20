import styled from "styled-components";
import camera from "../assets/icon-camera.svg";
import search from "../assets/icon-search.svg";
import { InputBox, InputField } from "./FormGroup";

export const SearchInput = () => {
  const SearchImage = (
    <SearchImageButton>
      <IconImage src={camera} />
    </SearchImageButton>
  );
  return (
    <SearchWrapper>
      <InputBox
        style={{
          height: "4.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
        }}
      >
        <InputField placeholder='Search high quality photos for free!...' />
        {SearchImage}
      </InputBox>
      <SearchButton>
        <IconImage src={search} />
      </SearchButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

const IconImage = styled.img``;

const SearchImageButton = styled.button`
  background: none;
`;

const SearchButton = styled.button`
  width: 4.625rem;
  display: grid;
  place-items: center;
  border-radius: 0 var(--radius) var(--radius) 0;
  background: var(--pishure-red);
`;
