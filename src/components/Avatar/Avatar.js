import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const Avatar = () => {
	return (
		<>
			<AvatarImage />
			<Icon
				type='chevron'
				width='8px'
				height='10px'
				style={{ transform: "rotate(90deg)" }}
			/>
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

export default Avatar;
