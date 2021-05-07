import React from 'react';
import styled from 'styled-components'

const FormGroup = ({type='text', label, register, mgR, children}) => {
  return (
    <InputBox mgR={mgR ? mgR : null}>
      <InputField type={type} placeholder={label} />
      {children ? <Icon>{children}</Icon> : null}
    </InputBox>
  )
}

const InputBox = styled.div`
  padding: 0 1rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  color: var(--white);
  background: #12141D;
  border: 1px solid #3D416C;
  border-radius: var(--radius)

  ${(props) => props.mgR && `
    margin-right: 1.5rem;
  `}

`

const InputField = styled.input`
  background: none;
  border: none;
  font-size: 1rem;
  width: 100%;
  
  
  &::placeholder{
    color: #BEC0CE;
  }
`

const Icon = styled.span`
  
`;

export default FormGroup
