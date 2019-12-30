import styled from "styled-components"

export const SpinnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60vh;
`;

export const SpinnerContainer = styled.div`
	display: block;
	height: 50px;
	width: 50px;
	border: 3px solid ${props => props.theme.lightGrey};
	border-top-color: ${props => props.theme.lightBlue};
	border-radius: 50%;
	animation: spinAnimation 1s ease-in-out infinite;

	@keyframes spinAnimation {
		100% {
			transform: rotate(360deg)
		}
	}
`