import React from "react";

import styled from "styled-components";

const Header = ({ children }) => {
  return <Nav>{children}</Nav>;
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  font-size: 0.875rem;
`;

export default Header;
