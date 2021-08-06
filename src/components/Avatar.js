import React from "react";
import styled from "styled-components";
import arrowDown from "../assets/chevron-down.svg";

const Avatar = () => {
	return (
		<>
			<AvatarImage />
			<CaretDown src={arrowDown} />
		</>
	);
};

const AvatarImage = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	object-fit: cover;
	background-color: var(--white);
	margin-right: 0.6rem;
`;

const CaretDown = styled.img`
	transform: rotate(90deg);
	width: 8px;
	height: 10px;
	object-fit: cover;
`;

export default Avatar;
