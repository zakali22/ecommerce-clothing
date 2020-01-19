import styled from "styled-components"

export const CartDropdownContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	transform: translateY(100%);
	z-index: 100;
	background: white;
	border: 2px solid black;
	padding: 30px;
`;

export const CartDropdownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	height: 250px;
	overflow-y: scroll;

	&::-webkit-scrollbar-track {
	    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
	    border-radius: 2px;
	    background-color: #F5F5F5;
	}

	&::-webkit-scrollbar {
	    width: 15px;
	    background-color: #F5F5F5;
	}

	&::-webkit-scrollbar-thumb {
	    border-radius: 10px;
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	    background-color: rgba(0,0,0,0.5);
	}

	&.empty {
		overflow-y: hidden;
		&::-webkit-scrollbar-track,
		&::-webkit-scrollbar,
		&::-webkit-scrollbar-thumb {
			display: none;
		}
	}
`;

export const CartDropdownTotal = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
`;


export const CartDropdownEmpty = styled.span`
	font-size: 2rem;
	display: block;
	margin: 50px auto;
`