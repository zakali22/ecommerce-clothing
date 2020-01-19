import styled, {css} from "styled-components"
import "../../styles/_variables.scss";
// const CustomStyledButton = styled.css`

// `

export const Button = styled.button`
	padding: 1.5rem 2rem;
	font-size: 1.8rem;
	cursor: pointer;
	background: ${props => (props.type === 'third-party-button' && props.theme.lightBlue) || (props.type === 'checkout-button' && 'white') || props.theme.grey};
	color: ${props => (props.type === 'checkout-button' && props.theme.grey) || 'white'};
	text-transform: uppercase;
	font-family: ${props => props.theme.mainFont};
	letter-spacing: .1rem;
	font-weight: bold;
	border: ${props => (props.type === 'checkout-button' && '2px solid #2d2d2d') || '2px solid transparent'};
	transition: all .2s ease-in-out;
	width:  ${props => (props.type === 'checkout-button' && '100%') || '50%'};
	&:hover {
		background: ${props => (props.type === 'checkout-button' && props.theme.grey) || 'white'};
		color: ${props => (props.type === 'checkout-button' && 'white') || props.theme.grey};
		border: 2px solid #2d2d2d;
	}
`