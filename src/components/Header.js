import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Header = ({children}) => {
  return (
      <Nav>
        <Link to="/">
          <Logo src={logo}/>
        </Link>
        
        {children}
      </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  font-size: 0.875rem;
`


const Logo = styled.img``

export default Header;
