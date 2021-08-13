import React from "react";
import styled from "styled-components/macro";
import { Wrapper, Container } from "../components/Wrapper";
import ImagePreview, { ImagePreviewDetails } from "../components/ImagePreview";
import { SearchInput } from "../components/SearchInput";
import ImageGrid from "../components/ImageGrid";
import Header from "../components/Header/Header";
import Logo from "../components/Logo";
import NavSideContent from "../components/Header/NavSideContent";

const Home = () => {
	return (
		<Wrapper>
			<Header>
				<Logo />
				<NavSideContent />
			</Header>
			<Container
				style={{
					marginTop: "8.25rem",
					paddingBottom: "0",
				}}
			>
				<Col>
					<Heading>Best Collection of Nigerian Stock Photos.</Heading>
					<Body>
						Tell the true Nigerian stories through the lenses of
						creators all over Nigeria.
					</Body>
					<SearchInput />
					<SearchExample>
						<Span>Try:</Span>danfo, street, traffic, lagos life,
					</SearchExample>
				</Col>
				<ImagePreview />
			</Container>
			<ImagePreviewDetails />
			<Pad />
			<ImageGrid />
		</Wrapper>
	);
};

const Col = styled.div`
	max-width: 33.75rem;
`;

const Heading = styled.h1`
	font-size: var(--font-1);
	margin-bottom: 1rem;
	margin-top: 12.5rem;
	line-height: 1.3;

	@media (max-width: 470px) {
		font-size: var(--font-3);
	}
`;

const Pad = styled.div`
	margin-bottom: 122px;
`;

const Body = styled.p`
	margin-bottom: 3rem;
	font-size: var(--font-5);
	line-height: 1.5;
	color: var(--grey-10);

	@media (max-width: 470px) {
		font-size: var(--font-6);
	}
`;

const Span = styled.span`
	display: inline-block;
	margin-right: 1rem;
`;

const SearchExample = styled.p`
	font-size: 1rem;
	color: var(--grey-10);
`;

export default Home;
