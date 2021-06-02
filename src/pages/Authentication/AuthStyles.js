import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	max-width: 73rem;
	justify-content: space-between;
	margin-top: 4rem;
	padding-bottom: 2rem;
`;

export const WrapperInner = styled.div``;

export const ImagePreviewWrap = styled.div``;

export const FormWrapper = styled.div`
	max-width: 28.125rem;
`;

export const Headline = styled.h1`
	margin-bottom: 1rem;
	font-size: var(--font-2);
	line-height: 1.3;
`;

export const BodyText = styled.p`
	margin-bottom: 2.5rem;
	font-size: 1.125rem;
	line-height: 1.5;
	color: #e9eaef;
`;

export const WrapperItem = styled.div`
	display: flex;
	margin-bottom: 4.1875rem;
`;

export const TwitterIcon = styled.img`
	margin-right: 1.5rem;
`;

export const FbIcon = styled.img`
	margin-right: 0;
`;

export const Or = styled.div`
	position: relative;
	text-align: center;
	margin-bottom: 3.5rem;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		background: #9395ad;
		left: 0;
		top: calc(50% - 0.5px);
	}
`;

export const OrInner = styled.span`
	display: inline-block;
	position: relative;
	padding: 0 1rem;
	background-color: var(--black-900);
	z-index: 1;
	color: #9395ad;
`;

export const Form = styled.form``;

export const FormRow = styled.div`
	display: flex;
	margin-bottom: 1.5rem;

	&.mg-b {
		margin-bottom: 2.5rem;
	}
`;

export const FormText = styled.p`
	font-size: var(--font-7);
	color: #bec0ce;
	text-align: center;
`;