import React from 'react'
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Header = ({children, justifyContent}) => {
  return (
    <Wrapper>
      <Nav>
        <Logo src={logo}/>
        {children}
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  font-size: 0.875rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
`


const Logo = styled.img``

export default Header;
