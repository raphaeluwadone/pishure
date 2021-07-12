import React from "react";

import styled from "styled-components";

const Header = ({ children, ...restProps }) => {
  return <Nav {...restProps}>{children}</Nav>;
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  ${"" /* left: 0; */}
  max-width: 83rem;
  width: 100%;
  margin: 0 auto;
  height: 6.25rem;
  font-size: 0.875rem;
  background-color: var(--black-900);

  @media (max-width: 1367px) {
    padding-right: 4rem;
  }

  @media (max-width: 400px) {
    padding: 0 1.5rem;
  }
`;

export default Header;
