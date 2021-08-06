import React from "react";
import styled from "styled-components";

const FormGroup = ({
	type = "text",
	label,
	register,
	name,
	mgR,
	children,
	error,
}) => {
	console.log(`${name} error `, error);
	return (
		<Wrapper mgR={mgR ? mgR : null}>
			<InputBox error={error}>
				<InputField
					type={type}
					placeholder={label}
					{...register(name)}
				/>
				{children ? <Icon>{children}</Icon> : null}
			</InputBox>
			{error && <ErrorText>{error.message}</ErrorText>}
		</Wrapper>
	);
};

export const InputBox = styled.div`
	padding: 0 1rem;
	width: 100%;
	height: 3.5rem;
	display: flex;
	align-items: center;
	background: #12141d;
	border: 1px solid #3d416c;
	border-radius: var(--radius);
	${props =>
		props.error &&
		`
    border-color: var(--pishure-red)
  `}
`;

export const InputField = styled.input`
	background: none;
	border: none;
	font-size: 1rem;
	width: 100%;
	color: #bec0ce;

	&::placeholder {
		color: #bec0ce;
	}
`;

const Icon = styled.span``;

const ErrorText = styled.p`
	color: var(--pishure-red);
	font-size: var(--font-7);
	padding: 0.5rem 0 0 0.5rem;
	font-style: italic;
	font-weight: 300;
`;

const Wrapper = styled.div`
	width: 100%;

	${props =>
		props.mgR &&
		`
    margin-right: 1.5rem;
  `}
`;

export default FormGroup;
